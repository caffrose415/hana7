package collection;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class Dictionary {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Map<String, String> map = new HashMap<>();
		map.put("Love", "사랑");
		map.put("Apple", "사과");
		map.put("Baby", "아기");

		while (true) {
			try {
				System.out.print("찾고 싶은 단어는? ");
				String word = br.readLine();
				word = word.substring(0, 1).toUpperCase() + word.substring(1);
				if (word.equals("Quit")) {
					break;
				}
				if (map.containsKey(word)) {
					System.out.println(map.get(word));
				} else {
					System.out.println("맞는 단어 입력 바람 : null");
				}

			} catch (RuntimeException e) {
				throw new RuntimeException(e);
			}

		}

	}
}
