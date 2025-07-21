package io;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ChatServer {
	private static final int PORT = 9999;
	private static Map<String, Set<ClientHandler>> rooms = new HashMap<>();

	public static void main(String[] args) throws IOException {
		ServerSocket serverSocket = new ServerSocket(PORT);
		System.out.println("ChatServer 실행 중...");

		while (true) {
			Socket socket = serverSocket.accept();
			new ClientHandler(socket).start();
		}
	}

	public static synchronized void joinRoom(String room, ClientHandler handler) {
		rooms.putIfAbsent(room, new HashSet<>());
		rooms.get(room).add(handler);
		broadcast(room,   handler.getName() + "님이 입장했습니다.");
	}

	public static synchronized void broadcast(String room, String message) {
		Set<ClientHandler> clients = rooms.get(room);
		if (clients != null) {
			for (ClientHandler ch : clients) {
				ch.sendMessage(message);
			}
		}
	}


	public static synchronized void leaveRoom(String room, ClientHandler handler) {
		Set<ClientHandler> clients = rooms.get(room);
		if (clients != null) {
			clients.remove(handler);
			broadcast(room,  handler.getName() + "님이 퇴장했습니다.");
			if (clients.isEmpty()) {
				rooms.remove(room);
			}
		}
	}

	public static synchronized Set<String> getRoomList() {
		return rooms.keySet();
	}
}
