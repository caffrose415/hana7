import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex5 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.print("점수를 입력하시오 -->>");

		int score = Integer.parseInt(br.readLine());
		switch (score / 10) {
			case 10, 9:
				System.out.println("A");
				break;
			case 8:
				System.out.println("B");
				break;
			case 7:
				System.out.println("C");
				break;
			case 6:
				System.out.println("D");
				break;
			default:
				System.out.println("F");
		}

		System.out.print("학점을 입력하시오-->>");
		String grade = br.readLine();

		switch (grade) {
			case "A", "B" -> System.out.println("참 잘했음");
			case "C", "D" -> System.out.println("좀 더 노력해");
			case "F" -> System.out.println("다음 학기에 다시 만나요");
		}
	}
}
