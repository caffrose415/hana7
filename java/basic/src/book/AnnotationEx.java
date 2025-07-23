package book;

public class AnnotationEx {
	public static void main(String[] args) {
		Class<MyBook> myBookClass = MyBook.class;
		if (myBookClass.isAnnotationPresent(Book.class)) {
			Book bookAnnotation = myBookClass.getAnnotation(Book.class);
			System.out.println("bookAnnotation : " + bookAnnotation);
		}
	}
}
