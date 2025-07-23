package book;

public class Main {
	// 테스트용 main()
	public static void main(String[] args) {
		String[] names = {"Sam", "Rhee", "Kim"};
		String[] records = {"111", "222", "333"};
		GeneralBook gb = new ArrayedGeneralBook(names, records);
		gb.print();
		gb.add("Allan", "444");
		System.out.println(gb.names() + ", size=" + gb.size());
		gb.add("Alex", "55555");
		System.out.println(gb.names() + ", size=" + gb.size());
		System.out.println("exist=" + gb.nameExist("Alex"));
		gb.remove("Alex");
		System.out.println(gb.names() + ", size=" + gb.size());
		gb.remove("Sam");
		gb.print();
		System.out.println("gb.get(\"Allan\") = " + gb.get("Allan"));

		// String[] tmps = new String[10];
		// int size = 3;
		// System.arraycopy(names, 0, tmps, 0, size);
		// System.out.println(Arrays.toString(names));
		// System.out.println(Arrays.toString(tmps));
		// tmps[size++] = "NewName";
		// System.out.println(Arrays.toString(tmps));
		// int idx = -1;
		// for (int i = 0; i < size; i++) {
		// 	if (tmps[i].equals("Rhee")) {
		// 		idx = i;
		// 		break;
		// 	}
		// }
		// System.out.println("idx = " + idx);
		// System.arraycopy(tmps, idx + 1, tmps, idx, size - idx - 1);
		// tmps[--size] = null;
		// System.out.println(Arrays.toString(tmps));

	}
}
