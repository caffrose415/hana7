package mybank;

public class Account {
	protected int balance;

	public Account(int balance) {
		this.balance = balance;
	}

	public int deposit(int amt) {
		this.balance += amt;
		return this.balance;
	}

	@Override
	public String toString() {
		return "Account{" +
			"balance=" + balance +
			'}';
	}
}
