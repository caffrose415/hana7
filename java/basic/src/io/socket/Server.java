package io.socket;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class Server {
	public static final int PORT = 9999;

	public class TimeUtil {
		public static String getCurrentTime() {
			return LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
		}
	}

	public static void main(String[] args) throws IOException {
		try (ServerSocket server = new ServerSocket(PORT)) {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			Socket client = server.accept();
			System.out.println(client);

			DataInputStream in = new DataInputStream(client.getInputStream());
			DataOutputStream out = new DataOutputStream(client.getOutputStream());

			out.writeUTF("Hello");

			while (true) {
				String clientMsg = in.readUTF();
				System.out.println("[" + TimeUtil.getCurrentTime() + "] client: " + clientMsg);
				if (clientMsg.equals("bye"))
					break;

				System.out.print("You: ");
				String myMsg = br.readLine();
				out.writeUTF(myMsg);
				if (myMsg.equals("bye"))
					break;
			}
		} catch (Exception e) {
			System.out.println("Server Down!!");
		}

	}
}
