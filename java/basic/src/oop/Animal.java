package oop;

public abstract class Animal {
	String name;

	abstract void makeSound();
}

class Mouse extends Animal {
	void makeSound() {
		System.out.println("찍찍");
	}
}

class Dog extends Animal {
	void makeSound() {
		System.out.println("멍멍");
	}
}

class Cat extends Animal {
	void makeSound() {
		System.out.println("야옹");
	}
}

class AnimalEx {
	public static void main(String[] args) {
		Animal[] animals = {new Cat(), new Dog(), new Mouse()};
		for (Animal a : animals) {
			a.makeSound();
		}
	}
}

