package thread;

import lombok.AllArgsConstructor;

class PrintTable {
	public synchronized void printTable(int n) {
		System.out.println(n + "단 출력");
		for (int i = 1; i < 10; i++) {
			System.out.println(n + " * " + i + " = " + n * i);
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				return;
			}
		}
	}
}

@AllArgsConstructor
class PrintThread extends Thread {
	private PrintTable pt;
	private int n;

	public void run() {
		pt.printTable(n);
	}
}

public class PrintThreadEx {
	public static void main(String[] args) {
		PrintTable pt = new PrintTable();
		PrintThread th1 = new PrintThread(pt, 2);
		PrintThread th2 = new PrintThread(pt, 5);
		th1.start();
		th2.start();
	}
}
