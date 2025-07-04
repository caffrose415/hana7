public class Exam {
	public static void main(String[] args) {
		System.out.println("args: " + args.length);
		int midScore = 50;
		int finalScore = 80;
		System.out.println("midScore=" + midScore);
		System.out.println("finalScore=" + finalScore);

		System.out.printf("mid: %3d + final : %d = %d", midScore, finalScore, (midScore + finalScore));
	}
}
