import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex1 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.print("당신의 이름을 입력하세요-->>");
		String name = br.readLine();
		System.out.print("당신의 주소를 입력하세요-->>");
		String address = br.readLine();
		System.out.print("당신의 나이를 입력하세요-->>");
		int age = Integer.parseInt(br.readLine());
		System.out.print("당신의 키(cm)를 입력하세요-->>");
		double tall = Double.parseDouble(br.readLine());

		System.out.println("이름: " + name);
		System.out.println("주소: " + address);
		System.out.println("나이: " + age);
		System.out.println("키: " + tall);
	}
}
