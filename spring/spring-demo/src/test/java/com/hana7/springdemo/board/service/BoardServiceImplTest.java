// package com.hana7.springdemo.board.service;
//
// import org.junit.jupiter.api.BeforeAll;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.data.domain.Page;
// import org.springframework.data.domain.PageRequest;
// import org.springframework.data.domain.Pageable;
// import org.springframework.data.domain.Sort;
//
// import com.hana7.springdemo.board.dto.BoardDTO;
// import com.hana7.springdemo.board.dto.PageRequestDTO;
// import com.hana7.springdemo.board.dto.PageResultDTO;
// import com.hana7.springdemo.board.entity.Board;
// import com.hana7.springdemo.board.entity.QBoard;
// import com.hana7.springdemo.board.repository.BoardRepository;
// import com.querydsl.core.BooleanBuilder;
// import com.querydsl.core.types.dsl.BooleanExpression;
//
// import lombok.extern.log4j.Log4j2;
//
// @SpringBootTest
// @Log4j2
// class BoardServiceImplTest {
//
// 	@Autowired
// 	BoardService boardService;
//
// 	@Autowired
// 	BoardRepository boardRepository;
//
// 	@BeforeEach
// 	void insertDummyData() {
// 		for (int i = 1; i <= 100; i++) {
// 			BoardDTO boardDTO = BoardDTO.builder()
// 				.title("Title " + i)
// 				.content("Content " + i)
// 				.writer("user" + (i % 10))
// 				.build();
// 			boardService.write(boardDTO);
// 		}
// 	}
//
//
// 	@Test
// 	public void write() {
// 		BoardDTO boardDTO = BoardDTO.builder()
// 			.title("Test Title1")
// 			.content("Test Content1")
// 			.writer("user001").build();
// 		log.info(boardService.write(boardDTO));
// 	}
//
// 	@Test
// 	public void testQuery() {
// 		Pageable pageable = PageRequest.of(0, 10, Sort.by("bno").descending());
// 		QBoard qBoard = QBoard.board;
// 		String keyword = "1";
// 		BooleanBuilder builder = new BooleanBuilder();
// 		BooleanExpression expression = qBoard.title.contains(keyword);
// 		builder.and(expression);
// 		Page<Board> result = boardRepository.findAll(builder, pageable);
// 		result.stream().forEach(log::info);
// 	}
//
// 	@Test
// 	public void testQuery2() {
// 		Pageable pageable = PageRequest.of(0, 10, Sort.by("bno").descending());
// 		QBoard qBoard = QBoard.board;
// 		//String keyword = "1";
// 		BooleanBuilder builder = new BooleanBuilder();
// 		BooleanExpression exTitle = qBoard.title.contains("1");
// 		BooleanExpression exContent = qBoard.content.contains("3");
// 		builder.and(qBoard.bno.gt(200L)).and(exTitle).or(exContent);
// 		Page<Board> result = boardRepository.findAll(builder, pageable);
// 		result.stream().forEach(log::info);
// 	}
//
// 	@Test
// 	public void testList() {
// 		PageRequestDTO pageRequestDTO
// 			= PageRequestDTO.builder().page(1).size(5).build();
// 		PageResultDTO<BoardDTO, Board> resultDTO = boardService.getList(pageRequestDTO);
// 		for (BoardDTO boardDTO : resultDTO.getDtoList()) {
// 			log.info(boardDTO);
// 		}
// 	}
//
// }
