package com.hana7.springdemo.board.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.board.dto.BoardResponseDTO;
import com.hana7.springdemo.board.service.BoardService;

@RestController
@RequestMapping("/boards")
public class BoardController {
	private final BoardService service;
	public BoardController(BoardService service) {
		this.service = service;
	}

	@GetMapping
	public List<BoardResponseDTO> getPageList(int page, int countPerPage) {
		return service.getPageList(page, countPerPage);
	}

	@GetMapping("/{id}")
	public BoardResponseDTO getBoard(@PathVariable int id) {
		return service.getBoard(id);
	}
}
