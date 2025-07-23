package oopex3;

public interface ExInterface {

	@FunctionalInterface
	interface MyPredicate<T> {
		boolean test(T t);
	}

	@FunctionalInterface
	interface MyFunction<T, R> {
		R apply(T t);
	}

	@FunctionalInterface
	interface MyReducer<T> {
		T apply(T r, T t);
	}
}
