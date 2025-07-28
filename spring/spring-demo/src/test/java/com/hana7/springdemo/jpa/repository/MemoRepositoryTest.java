package com.hana7.springdemo.jpa.repository;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.hana7.springdemo.jpa.entity.Memo;

@DataJpaTest
class MemoRepositoryTest {
	@Autowired
	MemoRepository memoRepository;

	@Test
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
}
