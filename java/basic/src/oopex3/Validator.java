package oopex3;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Validator {

	public static List<String> validate(Object obj) {
		List<String> messages = new ArrayList<>();

		Field[] fields = obj.getClass().getDeclaredFields();

		for (Field f : fields) {
			f.setAccessible(true);

			try {
				Object value = f.get(obj);
				String name = f.getName();

				if (f.isAnnotationPresent(NotNull.class)) {
					NotNull nn = f.getAnnotation(NotNull.class);
					if (value == null) {
						messages.add(name + "::" + nn.value());
						continue;
					}
				}

				if (f.isAnnotationPresent(Min.class) && value != null) {
					Min mm = f.getAnnotation(Min.class);
					double v = 0.0;
					if (value.getClass() == String.class) {
						v = ((String)value).length();
					} else {
						v = Double.parseDouble(value.toString());
					}

					if (v < mm.value()) {
						messages.add(name + "::" + mm.msg());
					}
				}
				if (f.isAnnotationPresent(Max.class) && value != null) {
					Max mm = f.getAnnotation(Max.class);
					double v = 0.0;
					if (value.getClass() == String.class) {
						v = ((String)value).length();
					} else {
						v = Double.parseDouble(value.toString());
					}
					if (v > mm.value()) {
						messages.add(name + "::" + mm.msg());
					}
				}
				if (f.isAnnotationPresent(In.class) && value != null) {
					In in = f.getAnnotation(In.class);
					String valStr = value.toString();
					boolean matched = Arrays.asList(in.value()).contains(valStr);
					if (!matched) {
						messages.add(name + "::" + valStr + " 불가능합니다");
					}
				}
			} catch (Exception e) {
				e.printStackTrace(System.out);
			}
		}
		return messages;
	}

	public static void main(String[] args) {
		Reflection r = new Reflection("Roh", 100, 10.0);
		List<String> msgs = Validator.validate(r);
		System.out.println(msgs);
	}
}
