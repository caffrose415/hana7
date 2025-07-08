package oop;

public class Student extends Person {
	private String program;
	private int year;
	private double fee;

	public Student(String name, String addr, int year, double fee, String program) {
		super(name, addr);
		this.year = year;
		this.fee = fee;
		this.program = program;
	}

	@Override
	public String toString() {
		return "Student[" + super.toString() + ", program='" + program + '\'' + ", year=" + year + ", fee=" + fee + ']';
	}

	public String getProgram() {
		return program;
	}

	public void setProgram(String program) {
		this.program = program;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public double getFee() {
		return fee;
	}

	public void setFee(double fee) {
		this.fee = fee;
	}

	public static void method(Person p) {
		Student s = (Student)p;
		System.out.println("DownCasting");
	}

	public static void main(String[] args) {
		Person p1 = new Person("Hong", "Seoul");
		Person p2 = new Student("Kim", "Pusan", 2025, 2000, "xx");
		Staff s1 = new Staff("xx", "xx", "xx", 500);
		
	}
}
