package oopex;

public class AppShape<T extends Shape> {
	private T shape;

	public AppShape(T shape) {
		this.shape = shape;
	}

	public double calcArea() {

		return this.shape.calcArea();
	}

	public double calcPerimeter() {
		return ((GeometricObject)shape).calcPerimeter();
	}

	public boolean isResizable() {
		return this.shape instanceof Resizable;
	}

	public void resize(int percent) {
		if (!isResizable()) {
			throw new IllegalStateException("Cannot resize: " + this.shape.getClass().getSimpleName());
		}
		((Resizable)shape).resize(percent);
	}

	@Override
	public String toString() {
		return "AppShape{" + "shape=" + shape + '}';
	}
}
