package com.hana7.springdemo.board.service;

import java.util.List;

import com.hana7.springdemo.board.dto.BoardResponseDTO;

public interface BoardService {
	List<BoardResponseDTO> getPageList(int page, int countPerPage);

	BoardResponseDTO getBoard(int id);
}
