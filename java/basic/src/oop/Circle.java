package oop;

public class Circle implements Comparable<Circle> {
	private double radius = 1.0;
	private String color = "red";

	public Circle() {

	}

	public Circle(double radius) {
		this.radius = radius;
	}

	public double getRadius() {
		return this.radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public String getColor() {
		return this.color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public double getArea() {
		return getRadius() * getRadius() * Math.PI;
	}

	@Override
	public String toString() {
		return "Circle{" + "radius=" + radius + ", color='" + color + '\'' + ", area= " + getArea() + '}';
	}

	public static void main(String[] args) {
		Circle circle = new Circle(2);
		System.out.println(circle.toString());
	}

	@Override
	public int compareTo(Circle c) {
		return Double.compare(this.radius, c.getRadius());
	}

}
