package com.hana7.springdemo.board.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.hana7.springdemo.board.dto.BoardResponseDTO;
import com.hana7.springdemo.board.dto.PageResponseDTO;
import com.hana7.springdemo.board.entity.Board;
import com.hana7.springdemo.board.repository.BoardRepository;

@Service
public class BoardServiceImpl implements BoardService {
	private final BoardRepository repository;
	public BoardServiceImpl(BoardRepository repository) {
		this.repository = repository;
	}

	@Override
	public List<BoardResponseDTO> getPageList(int page, int countPerPage) {
		Page<Board> results = repository.findAll(
			PageRequest.of(page - 1, countPerPage, Sort.by(Sort.Order.desc("id"))));

		return new PageResponseDTO<>(results, BoardServiceImpl::toDTO).getDtoList();
	}

	@Override
	public BoardResponseDTO getBoard(int id) {
		Optional<Board> byId = repository.findById(id);
		return byId.map(BoardServiceImpl::toDTO).orElse(null);

	}

	public static BoardResponseDTO toDTO(Board board) {
		return BoardResponseDTO.builder()
			.id(board.getId())
			.title(board.getTitle())
			.writer(board.getWriter())
			.hit(board.getHit())
			.createdAt(board.getCreatedAt()).build();
	}
}
