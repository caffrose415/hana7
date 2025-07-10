package oop;

public interface Alarm {
	void playMusic(String title);

	abstract public void beep();
}

class SmartPhone implements Alarm {
	private String phoneNumber;

	@Override
	public void playMusic(String title) {
		System.out.printf("[%s]이 재생됨\n", title);
	}

	@Override
	public void beep() {

	}
}
