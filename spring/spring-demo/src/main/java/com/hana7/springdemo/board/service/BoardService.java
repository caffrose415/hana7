package com.hana7.springdemo.board.service;

import java.util.List;

import com.hana7.springdemo.board.dto.BoardRequestDTO;
import com.hana7.springdemo.board.dto.BoardResponseDTO;

public interface BoardService {
	List<BoardResponseDTO> getPageList(int page, int countPerPage);

	BoardResponseDTO getBoard(int id);

	BoardResponseDTO createBoard(BoardRequestDTO requestDTO);

	BoardResponseDTO changeBoard(BoardRequestDTO requestDTO);

	void removeBoard(int id);
}
