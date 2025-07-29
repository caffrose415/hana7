package com.hana7.springdemo.board.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.board.dto.ReplyRequestDTO;

import com.hana7.springdemo.board.service.ReplyService;

@RestController
@RequestMapping("/replies")
public class ReplyController {
	private final ReplyService service;

	public ReplyController(ReplyService service) {
		this.service = service;
	}

	@PutMapping("/{id}")
	public void createReply(@PathVariable int id , @RequestBody  ReplyRequestDTO dto){
		service.createReply(id,dto);
	}
}
