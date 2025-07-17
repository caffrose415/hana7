package thread;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class DaemonThread extends Thread {
	public DaemonThread(String name) {
		super(name);
	}

	@Override
	public void run() {
		String name = Thread.currentThread().getName();
		System.out.println("DaemonThread started!" + name);
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			throw new RuntimeException(e);
		}
		System.out.println("DaemonThread ended!!");
	}

	public static void main(String[] args) {
		System.out.println("Thread.currentThread().getName() = " + Thread.currentThread().getName());

		DaemonThread dt = new DaemonThread();
		dt.start();

		System.out.println("MainThread ended!");
	}
}
