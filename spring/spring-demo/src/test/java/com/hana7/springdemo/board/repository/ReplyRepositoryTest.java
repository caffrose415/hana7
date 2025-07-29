package com.hana7.springdemo.board.repository;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.IntStream;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.test.annotation.Rollback;

import com.hana7.springdemo.board.entity.Board;
import com.hana7.springdemo.board.entity.Reply;
import com.hana7.springdemo.jpa.repository.RepositoryTest;


@Rollback(false)
class ReplyRepositoryTest extends RepositoryTest {
	@Autowired
	ReplyRepository repository;

	@Autowired
	BoardRepository boardRepository;


	@Test
	@Order(1)
	void addTest(){
		Board board = getBoard();
		long preCount = repository.countByBoard(board);
		IntStream.rangeClosed(1,50).forEach(i -> {
			Reply reply = Reply.builder()
				.reply("Reply " + i)
				.board(board)
				.replyer("Replyer "+ i)
				.build();
			repository.save(reply);
		});
	}

	@Test
	@Order(2)
	void listTest(){
		Board board = getBoard();
		List<Reply> replies = repository.findByBoard(board);
		replies.forEach(System.out::println);
	}

	@Test
	@Order(3)
	void updateTest(){
		Reply reply = repository.findById(55).orElseThrow();
		reply.setReply("New Reply!!!!!");
		reply.setReplyer("New Replyer!!!!!");
		repository.save(reply);
	}

	@Test
	@Order(4)
	void deleteTest(){
		repository.deleteById(51);
	}

	private Board getBoard(){
		Optional<Board> optionalBoard = boardRepository.findById(1);
		return optionalBoard
	}

}
