package com.hana7.springdemo.board.service;

import com.hana7.springdemo.board.dto.ReplyRequestDTO;

public interface ReplyService {
	void createReply(int id, ReplyRequestDTO dto);
}
