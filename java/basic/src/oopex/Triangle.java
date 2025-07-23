package oopex;

public class Triangle extends Shape implements GeometricObject {
	protected double width;
	protected double height;

	public Triangle(double width, double height) {
		this.width = width;
		this.height = height;
	}

	@Override
	double calcArea() {
		return this.width * this.height / 2;
	}

	@Override
	public double calcPerimeter() {
		return this.width * 3;
	}

	@Override
	public String toString() {
		return "Triangle{" + "width=" + width + ", height=" + height + '}';
	}

}
