package oopex3;

import java.lang.reflect.Field;

public class Reflects {
	public static void makeNotNullFields(Object obj) {
		Class<?> myClass = obj.getClass();

		while (myClass != null) {
			Field[] fields = myClass.getDeclaredFields();

			for (Field field : fields) {
				field.setAccessible(true);

				try {
					Object value = field.get(obj);
					if (value == null) {
						Class<?> type = field.getType();

						if (type == String.class) {
							field.set(obj, "");
						} else if (type == int.class || type == Integer.class) {
							field.set(obj, 0);
						}
					}
				} catch (IllegalAccessException e) {
					e.printStackTrace(System.out);
				}
			}

			myClass = myClass.getSuperclass();
		}
	}

	public static void main(String[] args) {
		Reflection r = new Reflection();
		System.out.println(r);
		makeNotNullFields(r);
		System.out.println(r);
	}

}
