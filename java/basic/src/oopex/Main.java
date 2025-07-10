package oopex;

public class Main {
	public static void main(String[] args) {
		Shape[] shapes = {new Circle(3), new Rectangle(3, 4), new ResizableCircle(7), new ResizableRectangle(7, 8),
			new Triangle(7, 7)};

		// for (Shape shape : shapes) {
		// 	try {
		// 		double perimeter = ((GeometricObject)shape).calcPerimeter();
		// 		System.out.printf("%n%s의 둘레는 %,.1f, 면적은 %,.1f%n", shape, perimeter, shape.calcArea());
		//
		// 		int resizeRate = 10;
		// 		if (shape instanceof ResizableCircle || shape instanceof ResizableRectangle) {
		// 			System.out.printf("크기를 %d%% 변경 후%n", resizeRate);
		// 			Resizable resizableShape = (Resizable)shape;
		// 			resizableShape.resize(resizeRate);
		// 			double resizablePerimeter = ((GeometricObject)resizableShape).calcPerimeter();
		// 			System.out.printf("RESIZE: %s의 둘레는 %,.1f, 면적은 %,.1f%n", shape, resizablePerimeter,
		// 				shape.calcArea());
		// 		}
		// 	} catch (ClassCastException e) {
		// 		System.out.println(e.getMessage());
		// 	}
		// }

		AppShape<?>[] appShapes = new AppShape[shapes.length];

		for (int i = 0; i < appShapes.length; i++) {
			appShapes[i] = new AppShape<>(shapes[i]);
		}

		for (AppShape<?> sh : appShapes) {
			System.out.println("----------------------------------");
			System.out.println(sh.toString());
			System.out.println("넓이: " + sh.calcArea());
			System.out.println("둘레: " + sh.calcPerimeter());
			if (!sh.isResizable()) {
				continue;
			}
			sh.resize(10);
			System.out.println("resize 넓이: " + sh.calcArea());
		}
		System.out.println(System.getenv());
	}
}
