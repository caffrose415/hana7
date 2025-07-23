package collection;

import java.util.HashSet;
import java.util.Set;
import java.util.TreeSet;

import oop.Circle;

public class Sets {
	public static void main(String[] args) {
		Set<Integer> set1 = new HashSet<>();

		set1.add(100);
		set1.add(90);
		set1.add(200);
		set1.add(99);
		System.out.println(set1);

		Set<Integer> set2 = new TreeSet<>();
		set2.add(100);
		set2.add(90);
		set2.add(200);
		set2.add(99);
		System.out.println(set2);

		Set<Circle> circles = new TreeSet<>();
		circles.add(new Circle(5));
		circles.add(new Circle(15));
		circles.add(new Circle(3));
		circles.add(new Circle(7));
		System.out.println(circles);
	}
}
