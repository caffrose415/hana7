package book;

public class ArrayedGeneralBook implements GeneralBook {
	private String[] names;
	private String[] records;

	public ArrayedGeneralBook(String[] initNames, String[] initRecords) {
		this.names   = new String[initNames.length];
		this.records = new String[initRecords.length];

		for (int i = 0; i < initNames.length; i++) {
			this.names[i]   = initNames[i];
			this.records[i] = initRecords[i];
		}
	}

	@Override
	public int size() {
		return names.length;
	}

	@Override
	public String names() {
		if (names.length == 0) {
			return "";
		}

		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < names.length; i++) {
			sb.append(names[i]);
			if (i < names.length - 1) {
				sb.append(" ");
			}
		}
		return sb.toString();
	}

	@Override
	public String records() {

		if (records.length == 0) {
			return "";
		}
		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < records.length; i++) {
			sb.append(records[i]);
			if (i < records.length - 1) {
				sb.append(" ");
			}
		}
		return sb.toString();
	}

	@Override
	public boolean nameExists(String name) {
		for (String n : names) {
			if (n.equals(name)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void add(String name, String record) {
		if (nameExists(name)) {
			System.out.println("이미 존재하는 이름: " + name);
			return;
		}

		String[] newNames   = new String[names.length + 1];
		String[] newRecords = new String[records.length + 1];

		for (int i = 0; i < names.length; i++) {
			newNames[i] = names[i];
			newRecords[i] = records[i];
		}

		newNames[names.length] = name;
		newRecords[records.length] = record;

		names = newNames;
		records = newRecords;

		sort();
	}

	@Override
	public void remove(String name, String record) {
		int idx = -1;
		for (int i = 0; i < names.length; i++) {
			if (names[i].equals(name) && records[i].equals(record)) {
				idx = i;
				break;
			}
		}
		if (idx == -1) {
			System.out.println("삭제X, 해당 이름/레코드를 찾지 못함: " + name + "/" + record);
			return;
		}

		String[] newNames   = new String[names.length - 1];
		String[] newRecords = new String[records.length - 1];

		for (int i = 0, j = 0; i < names.length; i++) {
			if (i == idx) continue;
			newNames[j]  = names[i];
			newRecords[j] = records[i];
			j++;
		}
		names   = newNames;
		records = newRecords;
	}

	@Override
	public String get(String name) {
		for (int i = 0; i < names.length; i++) {
			if (names[i].equals(name)) {
				return records[i];
			}
		}
		return null;
	}

	@Override
	public void sort() {
		for (int i = 0; i < names.length - 1; i++) {
			for (int j = 0; j < names.length - i - 1; j++) {
				if (names[j].compareTo(names[j + 1]) > 0) {

					String tmpName = names[j];
					names[j] = names[j + 1];
					names[j+ 1] = tmpName;

					String tmpRec  = records[j];
					records[j] = records[j + 1];
					records[j + 1] = tmpRec;
				}
			}
		}
	}

	@Override
	public void print() {
		for (int i = 0; i < names.length; i++) {
			System.out.println(names[i] + records[i]);
		}
	}

}
