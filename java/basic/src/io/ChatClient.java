package io;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

public class ChatClient {
	public static void main(String[] args) throws IOException {
		Socket socket = new Socket("localhost", 9999);
		BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
		PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
		BufferedReader keyboard = new BufferedReader(new InputStreamReader(System.in));

		new Thread(() -> {
			try {
				String line;
				while ((line = in.readLine()) != null) {
					System.out.println(line);
				}
			} catch (IOException e) {
				System.out.println("서버 연결 종료");
			}
		}).start();

		String input;
		while ((input = keyboard.readLine()) != null) {
			out.println(input);
			if (input.equals("/quit")) break;
		}

		socket.close();
	}
}
