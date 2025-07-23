package oopex3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class My implements ExInterface {

	static <T> List<T> filter(List<T> list, MyPredicate<T> predicate) {
		ArrayList<T> result = new ArrayList<>();

		for (T i : list) {
			if (predicate.test(i)) {
				result.add(i);
			}
		}
		return result;
	}

	static <T> List<T> map(List<T> list, MyFunction<T, T> function) {
		ArrayList<T> result = new ArrayList<>();
		for (T i : list) {
			result.add(function.apply(i));
		}
		return result;
	}

	static <T> T find(List<T> list, MyPredicate<T> predicate) {
		T result = null;
		for (T i : list) {
			if (predicate.test(i)) {
				result = i;
				break;
			}
		}
		return result;
	}

	static <T> T reducer(List<T> list, T initValue, MyReducer<T> reducer) {
		T result = initValue;
		for (T i : list) {
			result = reducer.apply(result, i);
		}
		return result;
	}

	public static void main(String[] args) {
		ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
		List<Integer> evens = filter(numbers, value -> value % 2 == 0);
		List<Integer> squares = map(numbers, value -> value * value);
		int bigger3 = find(numbers, value -> value > 3);
		int sum = reducer(numbers, 0, Integer::sum);
		System.out.println(evens);
		System.out.println(squares);
		System.out.println(bigger3);
		System.out.println(sum);
	}
}
