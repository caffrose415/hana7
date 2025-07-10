package bank;

public class Gen {
	static <T extends Number> T pow(T t) {
		double squared = t.doubleValue() * t.doubleValue();

		if (t instanceof Integer) {
			return (T)Integer.valueOf((int)squared);
		} else if (t instanceof Long) {
			return (T)Long.valueOf((long)squared);
		} else if (t instanceof Double) {
			return (T)Double.valueOf(squared);
		} else if (t instanceof Float) {
			return (T)Float.valueOf((float)squared);
		}

		return (T)Double.valueOf(squared);
	}

	public static void main(String[] args) {
		System.out.println(pow(5));
		System.out.println(pow(1.5));
	}
}
