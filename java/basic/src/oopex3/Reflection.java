package oopex3;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@Getter
@Setter
@ToString(callSuper = true)
public class Reflection extends Parent {
	@Min(value = 3, msg = "3글자 이상 입력하세요!")
	@In({"Hong", "Kim", "Lee", "Choi"})
	private String name;

	@NotNull()
	@Min(msg = "5보다는 커야합니다!")
	@Max(msg = "10보다 작아야합니다!")
	private Integer deptId;

	@NotNull()
	@Min(3)
	@Max(15)
	private Double addr;

	public Reflection() {
		super();
	}

	public Reflection(int id, String name) {
		super(id);
		this.name = name;
	}
}

@AllArgsConstructor
@NoArgsConstructor
@ToString
class Parent {
	private int id;
}


