package collection;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {
	public static String getGrade(int num) {
		String grade = switch (num / 10) {
			case 10, 9 -> "A";
			case 8 -> "B";
			case 7 -> "C";
			case 6 -> "D";
			default -> "F";
		};

		return grade;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		List<Integer> scores = new ArrayList<>();

		while (true) {
			System.out.print("점수를 입력하세요: ");
			try {
				int score = Integer.parseInt(br.readLine());
				if (score < 0) {
					break;
				}

				scores.add(score);
			} catch (NumberFormatException e) {
				System.out.println("숫자를 입력하세요!!");
			}

		}

		System.out.println("학생들의 성적 : " + scores);
		for (int i = 0; i < scores.size(); i++) {

			System.out.println(i + " 학생의 성적은 " + scores.get(i) + "점이며 학점은 " + getGrade(scores.get(i)) + "이다");
		}
	}

}
