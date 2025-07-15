package oopex3;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Validator {

	public static List<String> validate(Object obj) {
		List<String> messages = new ArrayList<>();

		Field[] fields = obj.getClass().getDeclaredFields();

		for (Field field : fields) {
			field.setAccessible(true);

			try {
				Object value = field.get(obj);
				String name = field.getName();

				if (field.isAnnotationPresent(NotNull.class)) {
					NotNull ann = field.getAnnotation(NotNull.class);
					if (value == null) {
						messages.add(name + "::" + ann.value());
						continue;
					}
				}

				if (value != null) {
					double numericValue = getNumericValue(field, value);

					if (field.isAnnotationPresent(Min.class)) {
						Min ann = field.getAnnotation(Min.class);
						if (numericValue < ann.value()) {
							messages.add(name + "::" + ann.msg());
						}
					}

					if (field.isAnnotationPresent(Max.class)) {
						Max ann = field.getAnnotation(Max.class);
						if (numericValue > ann.value()) {
							messages.add(name + "::" + ann.msg());
						}
					}

					if (field.isAnnotationPresent(In.class)) {
						In ann = field.getAnnotation(In.class);
						String valStr = value.toString();
						if (!Arrays.asList(ann.value()).contains(valStr)) {
							messages.add(name + "::" + valStr + " 불가능합니다");
						}
					}
				}

			} catch (Exception e) {
				e.printStackTrace(System.out);
			}
		}

		return messages;
	}


	private static double getNumericValue(Field field, Object value) {
		if (value instanceof String) {
			return ((String) value).length();
		}
		try {
			return Double.parseDouble(value.toString());
		} catch (NumberFormatException e) {
			return Double.NaN;
		}
	}

	public static void main(String[] args) {
		Reflection r = new Reflection("Roh", 100, 10.0);
		List<String> msgs = Validator.validate(r);
		System.out.println(msgs);
	}
}
