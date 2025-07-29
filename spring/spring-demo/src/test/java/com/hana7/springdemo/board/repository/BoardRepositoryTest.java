package com.hana7.springdemo.board.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.stream.Stream;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Commit;

import com.hana7.springdemo.board.entity.Board;
import com.hana7.springdemo.jpa.repository.RepositoryTest;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class BoardRepositoryTest extends RepositoryTest {

	@Autowired
	BoardRepository repository;

	@Test
	@Order(1)
	@Commit
	void addTest(){
		repository.saveAll(
		Stream.iterate(1,n->n+1).limit(100).map(n-> Board.builder().title("Title "+ n).writer("writer "+ n).build()).toList());

		assertEquals(100,repository.count());
	}

	@Test
	@Order(2)
	void pageListTest(){
		repository.findAll(
		PageRequest.of(0,10,Sort.by(Sort.Order.desc("id")))).forEach(this::print);
	}
}
