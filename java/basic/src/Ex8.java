import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.List;

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

		public int transferTo(Account other, int amount) {
			if (amount > this.balance) {
				System.out.printf("[%s] 잔액이 부족하여 %s로 송금할 수 없습니다.%n",
					this.name, other.name);
				return this.balance;
			}

			this.action(-amount);

			other.action(amount);
			return this.balance;
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
		Account conan = new Account("11-111-111", "코난", 100000);
		Account jangmi = new Account("22-222-222", "장미",  50000);
		Account miran  = new Account("33-333-333", "미란",  10000);

		List<Account> accounts = List.of(conan, jangmi, miran);
		Account current = null;
		while (true) {
			String currentName = (current == null ? "없음" : current.getName());
			System.out.printf("현재 계좌: %s (%s원)%n", currentName,
				current == null ? 0 : current.getBalance());
			System.out.print("[S]선택 [ + ]입금 [ - ]출금 [ T ]송금 [ Q/Enter ]종료> ");
			String cmd = br.readLine();

			if (cmd.isBlank() || cmd.equalsIgnoreCase("Q")) {
				System.out.println("은행업무 이후 계좌 정보.");
				accounts.forEach(Account::display);
				break;
			}

			switch (cmd.toUpperCase()) {
				case "S" -> {
					// 계좌 리스트 보여주기
					System.out.println("=== 사용 가능한 계좌 ===");
					for (Account ac : accounts) {
						System.out.printf("%s - %s (잔액: %,d원)%n",
							ac.getId(), ac.getName(), ac.getBalance());
					}
					System.out.print("선택할 계좌번호 입력> ");
					String selId = br.readLine().trim();
					Account sel = accounts.stream()
						.filter(ac -> ac.getId().equals(selId))
						.findFirst()
						.orElse(null);
					if (sel == null) {
						System.out.println("해당 계좌를 찾을 수 없습니다.");
					} else {
						current = sel;
						System.out.printf("[%s] 계좌를 선택했습니다.%n", current.getName());
					}
				}

				case "+" -> {
					if (current == null) {
						System.out.println("먼저 S로 계좌를 선택하세요.");
						break;
					}
					System.out.print("얼마를 입금하시겠어요? ");
					int amt = Integer.parseInt(br.readLine());
					current.deposit(amt);
				}

				case "-" -> {
					if (current == null) {
						System.out.println("먼저 S로 계좌를 선택하세요.");
						break;
					}
					System.out.print("얼마를 출금하시겠어요? ");
					int amt = Integer.parseInt(br.readLine());
					current.withdraw(amt);
				}

				case "T" -> {
					if (current == null) {
						System.out.println("먼저 S로 계좌를 선택하세요.");
						break;
					}
					System.out.print("송금할 계좌번호 입력> ");
					String otherId = br.readLine().trim();
					Account recv = accounts.stream()
						.filter(ac -> ac.getId().equals(otherId))
						.findFirst()
						.orElse(null);
					if (recv == null) {
						System.out.println("해당 계좌를 찾을 수 없습니다.");
						break;
					}
					System.out.print("얼마를 송금하시겠어요? ");
					int amt = Integer.parseInt(br.readLine());
					current.transferTo(recv, amt);
				}

				default -> System.out.println("알 수 없는 명령입니다.");
			}

			System.out.println();  // 한 줄 띄워서 가독성 확보
		}

	}
}
