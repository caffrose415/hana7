package oopex;

public class Circle extends Shape implements GeometricObject {
	protected double radius;

	public Circle(double radius) {
		this.radius = radius;
	}

	@Override
	double calcArea() {
		return this.radius * this.radius * Math.PI;
	}

	@Override
	public double calcPerimeter() {
		return this.radius * Math.PI * 2;
	}

	@Override
	public String toString() {
		return "Circle{" + "radius=" + radius + '}';
	}

}
