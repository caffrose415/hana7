package oop;

interface Drawable {
	void draw();
}

class Rectangle implements Drawable {

	@Override
	public void draw() {
		System.out.println("Draw Rectangle");
	}
}

class Triangle implements Drawable {

	@Override
	public void draw() {
		System.out.println("Draw Triangle");
	}
}

public class DrawEx {
	public static void main(String[] args) {
		Drawable d = new Rectangle();
		d.draw();
	}
}
