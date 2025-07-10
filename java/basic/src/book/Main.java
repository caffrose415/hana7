package book;

public class Main {
	// 테스트용 main()
	public static void main(String[] args) {
		String[] names   = {"Sam", "Rhee", "Kim"};
		String[] records = {"1111", "2222", "3333"};

		ArrayedGeneralBook gb = new ArrayedGeneralBook(names, records);
		System.out.println(gb.names());

		gb.add("Allan", "4444");
		gb.print();

		System.out.println("현재 저장된 데이터의 크기: " + gb.size(names));
		gb.add("Alex", "5555");
		System.out.println("현재 저장된 데이터의 크기: " + gb.size(names));
		gb.print();

		System.out.println(gb.nameExists("Alex"));

		gb.remove("Alex", "5555");
		gb.remove("Sam", "1111");
		gb.print();

		String found = gb.get("Allan");
		System.out.println(found);
	}
}
