package com.hana7.springdemo.jpa.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;
import org.springframework.util.StringUtils;

import com.hana7.springdemo.jpa.entity.Memo;
import com.hana7.springdemo.jpa.entity.QMemo;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;

class MemoRepositoryTest extends RepositoryTest{
	@Autowired
	MemoRepository memoRepository;

	@Test
	@Order(1)
	public void saveTest(){
		// give
		Memo m = Memo.builder().memoText("asdfjkl").build();

		Memo mbr = new Memo();
		mbr.setMemoText("qwerty");

		// when
		Memo savedM = memoRepository.save(m);
		Memo savedMbr = memoRepository.save(mbr);

		// then
		Memo foundM = memoRepository.findById(savedM.getMno()).orElseThrow();
		Memo foundMbr = memoRepository.findById(savedMbr.getMno()).orElseThrow();

		assertEquals(savedM.getMemoText(), foundM.getMemoText());
		assertEquals(savedM, foundM);
		assertEquals(savedMbr, foundMbr);
		System.out.println("foundM = " + foundM);
		System.out.println("foundMbr = " + foundMbr);
	}

	// @Test
	// @Commit
	// @Order(2)
	// void add100Test(){
	// 	List<Memo> list =  Stream.iterate(1,n->n+1).limit(100).map(n->Memo.builder().memoText("Text "+ n).build()).toList();
	//
	// 	memoRepository.saveAll(list);
	//
	// 	assertEquals(100,memoRepository.count());
	// }

	@Test
	@Order(3)
	void pagingTest(){
		Sort sorting = getOrders("Mno");
		Pageable paging = getPageable(1,sorting);
		Page<Memo> p1 = memoRepository.findAll(paging);

		p1.stream().forEach(this::print);

		memoRepository.findAll(getPageable(2,sorting)).stream().forEach(this::print);
	}

	private static Sort getOrders(String field) {
		Sort sorting = Sort.by(Sort.Order.desc(field));
		return sorting;
	}

	private static Pageable getPageable(int pageNo,Sort sorting) {
		Pageable paging = PageRequest.of(pageNo-1,10,sorting);
		return paging;
	}

	private void print(Memo memo){
		System.out.println(memo.getMno() + ", "+memo.getMemoText());
	}

	private void printList(List<Memo> list){
		list.forEach(this::print);
	}
	@Test
	@Order(4)
	void queryMethodTest(){
		List<Memo> memo10To20 = memoRepository.findByMnoBetweenOrderByMnoDesc(10,20);
		printList(memo10To20);

		printList(memoRepository.findByMnoBetween(10,20,getOrders("memoText")));
	}

	// @Test
	// @Order(5)
	// @Commit
	// void deleteTest(){
	// 	memoRepository.deleteById(100);
	// 	assertFalse(memoRepository.findById(100).isPresent());
	// 	memoRepository.deleteByMnoBetween(81,90);
	// 	assertEquals(89,memoRepository.count());
	//
	// 	long removeCnt = memoRepository.removeByMnoBetween(91,100);
	// 	System.out.println("removeCnt = " + removeCnt);
	// }

	@Test
	@Order(6)
	void queryAnnotationTest(){
		List<Memo> list = memoRepository.getListOverDesc(70);
		list.forEach(this::print);

		List<Object[]> listSome = memoRepository.getListSomeDesc();
		for(Object[] objs : listSome){
			System.out.println(Arrays.toString(objs));
		}
	}

	@Test
	@Order(7)
	void queryDslTest(){
		Iterable<Memo> memo5s = memoRepository.findAll(QMemo.memo.memoText.contains("5"));
		memo5s.forEach(this::print);

		memoRepository.findAll(QMemo.memo.mno.goe(60).and(QMemo.memo.memoText.contains("5"))).forEach(this::print);

		BooleanBuilder bb = new BooleanBuilder();
		// BooleanExpression over60 = QMemo.memo.mno.goe(60);
		BooleanExpression over60 = getBoolExp(60);
		bb.and(over60).and(getContainsText("5"));
	}

	private BooleanExpression getBoolExp(int mno){
		if(mno>0){
			return QMemo.memo.mno.goe(mno);
		}
		return null;
	}

	private BooleanExpression getContainsText(String txt){
		if(StringUtils.hasText(txt)){
			return QMemo.memo.memoText.contains(txt);
		}
		return null;
	}
}
