package mybank;

public class SavingAccount extends Account implements Withdrawable {

	public SavingAccount(int balance) {
		super(balance);
	}

	@Override
	public int withdraw(int amt) {
		this.balance -= amt;
		return this.balance;
	}
}
