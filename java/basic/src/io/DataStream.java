package io;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.Arrays;

import bank.Account;

public class DataStream {
	public final static Account[] accounts = {
		new Account().insert("1111", "Conan", 30000),
		new Account("2222", "Rose").deposit(10000),
		new Account("3333", "Miran", 20000),
	};

	public static void main(String[] args) throws FileNotFoundException {
		try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("./tmp/accounts.obj"))) {
			oos.writeObject(accounts);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

		try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("./tmp/accounts.obj"))) {
			Account[] newAccounts = (Account[])ois.readObject();
			System.out.println("newAccounts = " + Arrays.toString(newAccounts));
		} catch (IOException | ClassNotFoundException e) {
			throw new RuntimeException(e);
		}
	}

	private static void dataStream() {
		Account acc = accounts[0];
		System.out.println("acc = " + acc);

		try (DataOutputStream dos = new DataOutputStream(new FileOutputStream("./tmp/account.dat"))) {
			dos.writeUTF(acc.getAccountNo());
			dos.writeUTF(acc.getName());
			dos.writeInt(acc.getBalance());
		} catch (IOException e) {
			throw new RuntimeException(e);
		}

		try (DataInputStream dis = new DataInputStream(new FileInputStream("./tmp/account.dat"))) {
			Account newer = new Account(dis.readUTF(), dis.readUTF(), dis.readInt());
			System.out.println("newer = " + newer);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}
}
