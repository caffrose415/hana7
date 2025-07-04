import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex2 {
	static final int MIN_HEIGHT = 125;
	static final int MAX_HEIGHT = 165;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.print("어린이의 신장(cm)을 입력하세요: ");
		int childTall = Integer.parseInt(br.readLine());

		System.out.println(MIN_HEIGHT <= childTall && MAX_HEIGHT > childTall);
	}
}
