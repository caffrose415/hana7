import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex8 {
	public static class Account {
		private String id;
		private String name;
		private int balance;

		public Account() {

		}

		public Account(String id, String name) {
			this.insert(id, name);
		}

		public Account(String id, String name, int balance) {
			this.insert(id, name, balance);
		}

		public void insert(String id, String name) {
			this.id = id;
			this.name = name;
		}

		public void insert(String id, String name, int balance) {
			this.id = id;
			this.name = name;
			this.balance = balance;
		}

		public void deposit(int amt) {
			this.action(amt);
		}

		public void withdraw(int amt) {
			if (amt > this.balance) {
				System.out.println("잔액이 부족합니다!");
				return;
			}

			this.action(-amt);
		}

		public int transferTo(String otherId, int amount) {
			return 0;
		}

		private void action(int amt) {
			this.balance += amt;
			this.checkBalance();
		}

		private void checkBalance() {
			System.out.printf("%s님의 잔액은 %,9d원 입니다.%n", this.name, this.balance);
		}

		public void display() {
			System.out.println(this);
		}

		@Override
		public String toString() {
			return "Account{" + "accountNo=" + id + ", name='" + name + '\'' + ", balance=" + balance + '}';
		}

		public String getId() {
			return this.id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getName() {
			return this.name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public int getBalance() {
			return this.balance;
		}

		public void setBalance(int balance) {
			this.balance = balance;
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Account account = new Account("11-111-111", "코난", 10000);
		while (true) {
			System.out.print("+: 입금, -: 출금, Q/Enter: 종료> ");
			String action = br.readLine();

			if (action.isBlank() || action.equalsIgnoreCase("Q")) {
				System.out.println("작업이 완료되었습니다.");
				account.display();
				break;
			}

			boolean isDeposit = "+".equals(action);
			String actionText = isDeposit ? "입금" : "출금";
			System.out.print("얼마를 " + actionText + "하시겠어요? ");

			int amt = Integer.parseInt(br.readLine());
			if (isDeposit) {
				account.deposit(amt);
			} else {
				account.withdraw(amt);
			}

		}

	}
}
