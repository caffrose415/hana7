package ex;

import java.text.DecimalFormat;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.StringTokenizer;

public class StringPlay {
	public static void main(String[] args) {
		String s = "Hello Senior Coding~ Coding";

		String s1 = s.concat(":conccat");
		System.out.println("s1: " + s1);
		System.out.println("s: " + s);

		String query = "abc=123&efg=456&age=10";

		StringTokenizer st = new StringTokenizer(query, "&=");
		while (st.hasMoreElements()) {
			System.out.println(st.nextToken());
		}

		Format df = new DecimalFormat("#,###");
		String result = df.format(123456789.19);
		System.out.println(result);

		Format sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S (E) ");
		System.out.println(sdf.format(new Date()));

	}
}
