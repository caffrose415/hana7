package annotation;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.Comparator;

public class PrintAnnotationEx {
	public static void main(String[] args) throws Exception {

		Service service = new Service();

		Method[] methods = service.getClass().getDeclaredMethods();
		Arrays.sort(methods, Comparator.comparing(Method::getName));

		for (Method m : methods) {
			if (m.isAnnotationPresent(PrintAnnotation.class)) {
				PrintAnnotation pa = m.getAnnotation(PrintAnnotation.class);

				String value = pa.value();
				int number = pa.number();

				System.out.println(value.repeat(number));

				m.invoke(service);

				System.out.println(value.repeat(number));
			}

		}

	}
}
