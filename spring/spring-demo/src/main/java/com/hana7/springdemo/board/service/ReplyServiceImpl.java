package com.hana7.springdemo.board.service;

import org.springframework.stereotype.Service;

import com.hana7.springdemo.board.dto.ReplyRequestDTO;
import com.hana7.springdemo.board.entity.Board;
import com.hana7.springdemo.board.entity.Reply;
import com.hana7.springdemo.board.repository.BoardRepository;
import com.hana7.springdemo.board.repository.ReplyRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReplyServiceImpl implements ReplyService{
	private final ReplyRepository repository;
	private final BoardRepository boardRepository;


	@Override
	public void createReply(int id, ReplyRequestDTO dto) {
		Board board = boardRepository.findById(id).orElseThrow();

		Reply reply = Reply.builder()
			.reply(dto.getReply())
			.replyer(dto.getReplyer())
			.board(board)
			.build();

		repository.save(reply);
	}

}
