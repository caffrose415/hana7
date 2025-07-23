package io;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ClientHandler extends Thread {
	private Socket socket;
	private BufferedReader in;
	private PrintWriter out;
	private String userName;
	private String room;

	public ClientHandler(Socket socket) {
		this.socket = socket;
	}

	public void sendMessage(String msg) {
		out.println(msg);
	}

	public void run() {
		try {
			in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
			out = new PrintWriter(socket.getOutputStream(), true);

			out.println("이름을 입력하세요:");
			userName = in.readLine();

			out.println("입장할 방 이름을 입력하세요 (/join room):");

			while (true) {
				String line = in.readLine();
				if (line == null) break;

				if (line.startsWith("/join ")) {
					room = line.substring(6);
					ChatServer.joinRoom(room, this);
					break;
				} else {
					out.println("방을 먼저 입력하세요. 예: /join java");
				}
			}

			String msg;
			while ((msg = in.readLine()) != null) {
				if (msg.equals("/quit")) break;
				if (msg.equals("/list")) {
					out.println("현재 방 목록: " + ChatServer.getRoomList());
				} else if (msg.startsWith("/join ")) {
					String newRoom = msg.substring(6);
					if (!newRoom.equals(room)) {
						ChatServer.leaveRoom(room, this);      // 이전 방 나가기
						room = newRoom;
						ChatServer.joinRoom(room, this);       // 새 방 입장
					}
				} else {
					ChatServer.broadcast(room, userName + ": " + msg);
				}
			}

		} catch (IOException e) {
			System.out.println("클라이언트 연결 오류: " + e.getMessage());
		} finally {
			try {
				ChatServer.leaveRoom(room, this);
				if (socket != null) socket.close();
			} catch (IOException e) {
				System.out.println("소켓 닫기 오류");
			}
		}
	}
}
