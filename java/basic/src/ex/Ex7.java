package ex;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Ex7 {
	public static class Goods {
		private String name;
		private int price;
		private int numberOfStock;
		private int sold;

		public Goods(String name, int price, int numberOfStock, int sold) {
			this.name = name;
			this.price = price;
			this.numberOfStock = numberOfStock;
			this.sold = sold;
		}

		public String getName() {
			return this.name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public int getPrice() {
			return this.price;
		}

		public void setPrice(int price) {
			this.price = price;
		}

		public int getNumberOfStock() {
			return this.numberOfStock;
		}

		public void setNumberOfStock(int numberOfStock) {
			this.numberOfStock = numberOfStock;
		}

		public int getSold() {
			return this.sold;
		}

		public void setSold(int sold) {
			this.sold = sold;
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;

		ArrayList<Goods> goods = new ArrayList<>();
		while (true) {
			String str = br.readLine();
			if (str.equals("q")) {
				break;
			}
			st = new StringTokenizer(str);

			String name = st.nextToken();
			int price = Integer.parseInt(st.nextToken());
			int numberOfStock = Integer.parseInt(st.nextToken());
			int sold = Integer.parseInt(st.nextToken());

			goods.add(new Goods(name, price, numberOfStock, sold));
		}

		System.out.println("상품명 가격 재고량 판매량");
		for (Goods g : goods) {
			System.out.println(g.getName() + " " + g.getPrice() + " " + g.getNumberOfStock() + " " + g.getSold());
		}

	}
}
