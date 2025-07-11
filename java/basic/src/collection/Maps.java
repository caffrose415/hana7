package collection;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import oop.Circle;

public class Maps {
	public static void main(String[] args) {
		// Map<String, Circle> mapCircles = new HashMap<>();
		Map<String, Circle> mapCircles = new TreeMap<>();
		mapCircles.put("C1", new Circle(25));
		mapCircles.put("C2", new Circle(5));
		mapCircles.put("C3", new Circle(30));

		System.out.println("MapCircle: " + mapCircles);

		Set<String> strings = mapCircles.keySet();
		System.out.println("string: " + strings);

		Collection<Circle> values = mapCircles.values();
		System.out.println("values: " + values);

		Set<Map.Entry<String, Circle>> entries = mapCircles.entrySet();
		System.out.println("entries: " + entries);
	}
}
