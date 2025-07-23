package thread;

public class ThreadEx2 {
	public static class CheckRunnable implements Runnable {

		@Override
		public void run() {
			int progress = 0;
			String name = Thread.currentThread().getName();

			while (progress < 100) {
				int ran = (int)(Math.random() * 5) + 1;
				int actualIncrease = Math.min(ran, 100 - progress);
				progress += actualIncrease;
				try {
					Thread.sleep(100);
					System.out.println(
						name + " 개표율 : " + progress + "%(개표 증가율 : " + actualIncrease + "%)" + "*".repeat(progress));
				} catch (InterruptedException e) {
					System.out.println("ERROR!!!!");
				}
			}

		}
	}

	public static void main(String[] args) {
		Thread timer1 = new Thread(new CheckRunnable(), "제1지역구");
		Thread timer2 = new Thread(new CheckRunnable(), "제2지역구");
		Thread timer3 = new Thread(new CheckRunnable(), "제3지역구");

		timer1.start();
		timer2.start();
		timer3.start();

	}
}
