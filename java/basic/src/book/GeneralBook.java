package book;

public interface GeneralBook {
	int size();

	String names();

	String records();

	boolean nameExist(String name);

	void add(String name, String record);

	void remove(String name);

	String get(String name); // getRecordByName

	void sort();

	void print();
}
