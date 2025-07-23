package bank;

public class BankException extends Exception {
	public BankException(Account account, String message) {
		super(account + "::\n  " + message);
	}
}
