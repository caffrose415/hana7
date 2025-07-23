package oopex3;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.stream.IntStream;

public class StreamEx {
	public static void main(String[] args) {
		List<Integer> list = List.of(10, 6, 3, 3, 5, 4, 2, 7, 7, 9, 8, 10);

		System.out.print("짝수의 개수 : ");
		System.out.println(list.stream().filter(value -> value % 2 == 0).count());
		System.out.print("각 숫자를 제곱 : ");
		System.out.println(list.stream().map(value -> value * value).toList());
		System.out.print("중복 제거 : ");
		System.out.println(list.stream().distinct().toList());
		System.out.print("기본 정렬 : ");
		System.out.println(list.stream().sorted().toList());
		System.out.print("역순(내림차순) 정렬 : ");
		System.out.println(list.stream().sorted((o1, o2) -> o2 - o1).toList());
		System.out.print("처음 5개만 출력 : ");
		System.out.println(list.stream().limit(5).toList());
		System.out.print("처음 5개 건너뛰고 출력 : ");
		System.out.println(list.stream().skip(5).toList());
		System.out.print("값이 5보다 큰 것만 출력 : ");
		System.out.println(list.stream().filter(value -> value > 5).toList());
		System.out.print("1 ~ 10의 합계 : ");
		System.out.println(IntStream.range(1, 11).reduce(0, Integer::sum));
		System.out.print("1 ~ 10의 평균 : ");
		System.out.println(IntStream.range(1, 11).average().orElse(1.0));

		Optional<Integer> f5 = list.stream().filter(n -> n > 5).findFirst();
		if (f5.isPresent()) {
			System.out.println("f5 = " + f5);
		}

		list.stream().filter(n -> n > 5).findFirst().ifPresent(System.out::println);

		OptionalInt max = list.stream().mapToInt(Integer::intValue).max();
		max.ifPresent(System.out::println);
	}
}
