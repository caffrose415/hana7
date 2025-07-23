package book;

public class ArrayedGeneralBook implements GeneralBook {
	private static final int CAPACITY = 10;

	private String[] names;
	private String[] records;

	private int size;

	public ArrayedGeneralBook(String[] names, String[] records) {
		if (names == null || records == null || names.length != records.length)
			throw new IllegalStateException("Not valid names and records!!");

		this.size = names.length;
		this.names = new String[this.size + CAPACITY];
		this.records = new String[this.size + CAPACITY];

		cloneStrings(names, this.names);
		cloneStrings(records, this.records);
	}

	@Override
	public int size() {
		return this.size;
	}

	private String joinStrings(String[] strs) {
		StringBuilder sb = new StringBuilder(size * 15);
		for (int i = 0; i < size; i++) {
			sb.append(strs[i]).append(' ');
		}
		return sb.toString();
	}

	@Override
	public String names() {
		return joinStrings(names);
	}

	@Override
	public String records() {
		return joinStrings(records);
	}

	private int indexOf(String[] strs, String str) {
		for (int i = 0; i < this.size; i++) {
			if (strs[i].equals(str)) {
				return i;
			}
		}

		return -1;
	}

	@Override
	public boolean nameExist(String name) {
		int idx = indexOf(this.names, name);
		return idx != -1;
	}

	private String[] cloneStrings(String[] sources) {
		String[] tmps = new String[size + (size >> 1)];
		return this.cloneStrings(sources, tmps);
	}

	private String[] cloneStrings(String[] sources, String[] targets) {
		System.arraycopy(sources, 0, targets, 0, this.size);
		return targets;
	}

	private void expand() {
		// String[] tmps = new String[size + size / 2];
		this.names = cloneStrings(this.names);
		this.records = cloneStrings(this.names);
	}

	@Override
	public void add(String name, String record) {
		int idx = indexOf(this.names, name);
		if (idx != -1)
			return;

		if (this.size == this.names.length)
			expand();

		this.names[size] = name;
		this.records[size] = record;
		this.size++;
	}

	@Override
	public void remove(String name) {
		int idx = indexOf(this.names, name);
		if (idx == -1) {
			System.out.println("Cannot find the " + name);
			return;
		}

		this.size--;
		System.arraycopy(this.names, idx + 1, this.names, idx, size);
		this.names[size] = null;
		System.arraycopy(this.records, idx + 1, this.records, idx, size);
		this.records[size] = null;
	}

	@Override
	public String get(String name) {
		return this.records[indexOf(this.names, name)];
	}

	@Override
	public void sort() {
		for (int i = 0; i < size - 1; i++) {
			for (int j = 0; j < size - i - 1; j++) {
				if (names[j].compareTo(names[j + 1]) > 0) {
					String tName = names[j];
					String tRecord = records[j];
					names[j] = names[j + 1];
					records[j] = records[j + 1];
					names[j + 1] = tName;
					records[j + 1] = tRecord;
				}
			}
		}
	}

	@Override
	public void print() {
		this.sort();
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < size; i++) {
			sb.append(this.names[i]).append(this.records[i]).append('\n');
		}
		System.out.println(sb);
	}
}
