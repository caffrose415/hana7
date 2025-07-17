package io;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class Nslookup {
	public static void main(String[] args) {
		if (args.length == 0) {
			System.out.println("IP 주소나 도메인 주소를 인자로 하나 이상 지정하세요.");
			System.exit(0);
		}

		for (String host : args) {
			try {
				InetAddress ia = InetAddress.getByName(host);
				InetAddress[] inetAddrs = InetAddress.getAllByName(host);

				System.out.println("[" + host + "]");
				System.out.println("대표 호스트 이름: " + ia.getHostName());
				System.out.println("대표 IP 주소: " + ia.getHostAddress());
				System.out.println("====================================");

				for (InetAddress addr : inetAddrs) {
					System.out.println("호스트 이름 : " + addr.getHostName());
					System.out.println("IP 주소     : " + addr.getHostAddress());
					System.out.println("toString()  : " + addr.toString());
					System.out.println("------------------------------------");
				}
				System.out.println();
			} catch (UnknownHostException e) {
				System.err.println("[" + host + "] → 호스트를 찾을 수 없습니다.");
			}
		}
	}

}
