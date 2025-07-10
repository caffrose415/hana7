package book;

public interface GeneralBook {
	int size();
	String names();
	String records();
	boolean nameExists(String name);
	void add(String name, String record);
	void remove(String name, String record);
	String get(String name);
	void sort();
	void print();
}
