package oop;

public abstract class Car {
	public Car() {
		System.out.println("Car object 생성");
	}

	abstract void run();

	void start() {
		System.out.println("시동을 건다");
	}
}

class Porche extends Car {

	@Override
	void run() {
		System.out.println("포르쉐가 달린다");
	}

	@Override
	void start() {
		System.out.println("포르쉐가 시동을 건다");
	}
}

class CarEx {
	public static void main(String[] args) {
		Car car = new Porche();
		car.start();
		car.run();
	}
}
