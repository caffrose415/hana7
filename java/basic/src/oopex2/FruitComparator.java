package oopex2;

import java.util.Comparator;

public class FruitComparator implements Comparator<Fruit> {
	public int compare(Fruit fruit1, Fruit fruit2) {
		return fruit1.getName().compareTo(fruit2.getName());
	}

	public static void main(String[] args) {
		Comparator<? super Fruit> fc = new FruitComparator();

		Fruit banana = new Fruit("Banana");
		Apple redApple = new Apple("Red Apple");
		Orange orange = new Orange("Orange");

		System.out.println(banana instanceof Fruit);
		System.out.println(redApple instanceof Fruit);

		int result1 = fc.compare(banana, redApple);
		int result2 = fc.compare(redApple, orange);
		System.out.println("Result1: " + result1);
		System.out.println("Result2: " + result2);
	}
}
