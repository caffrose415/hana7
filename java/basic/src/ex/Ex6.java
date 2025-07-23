package ex;

public class Ex6 {
	public static void main(String[] args) {
		for (int j = 1; j <= 19; j++) {
			for (int i = 11; i <= 19; i++) {
				System.out.printf("%d * %d = %2d  ", i, j, i * j);
			}
			System.out.println();
		}
	}
}
