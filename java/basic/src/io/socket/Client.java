package io.socket;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class Client {
	public static final int PORT = 9999;

	public class TimeUtil {
		public static String getCurrentTime() {
			return LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
		}
	}

	public static void main(String[] args) throws IOException {
		try (Socket socket = new Socket("localhost", PORT)) {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			DataInputStream in = new DataInputStream(socket.getInputStream());
			DataOutputStream out = new DataOutputStream(socket.getOutputStream());

			out.writeUTF("Hi");

			while (true) {
				String serverMsg = in.readUTF();
				System.out.println("[" + Server.TimeUtil.getCurrentTime() + "] server: " + serverMsg);

				if (serverMsg.equals("bye"))
					break;

				System.out.print("You: ");
				String myMsg = br.readLine();
				out.writeUTF(myMsg);
				if (myMsg.equals("bye"))
					break;
			}
		} catch (IOException e) {
			System.out.println("서버와 연결이 종료되었습니다.");
		}

	}
}
