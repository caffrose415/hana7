import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex4 {
	static String[] money = {"400,000원", "600,000원", "800,000원", "1,000,000원"};
	static double[][] electric = {{200, 99.3, 910}, {400, 187.9, 1600}, {Integer.MAX_VALUE, 280.6, 7300}};

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.print("인원 수를 입력하시오-->>");
		int count = Integer.parseInt(br.readLine());
		System.out.println(count >= 4 ? money[3] : money[count - 1]);

		System.out.print("전기 사용량을 입력하세요-->>");
		int usage = Integer.parseInt(br.readLine());
		int order = 0;
		System.out.println("사용량: " + usage + "Kmh");

		for (int i = 0; i < electric.length; i++) {
			if (electric[i][0] >= usage) {
				order = i;
				break;
			}
		}
		System.out.println("기본요금: " + electric[order][2]);
		System.out.println("단가: " + electric[order][1]);
		System.out.println("전기 요금: " + (electric[order][2] + electric[order][1] * usage));
	}
}
