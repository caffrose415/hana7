package com.hana7.springdemo.board.service;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.AdditionalAnswers;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import com.hana7.springdemo.board.dto.BoardRequestDTO;
import com.hana7.springdemo.board.dto.BoardResponseDTO;
import com.hana7.springdemo.board.entity.Board;
import com.hana7.springdemo.board.entity.BoardContent;
import com.hana7.springdemo.board.repository.BoardRepository;
import com.hana7.springdemo.jpa.entity.Member;
import com.hana7.springdemo.jpa.repository.MemberRepository;
import com.hana7.springdemo.jpa.service.MemberService2Test;

class BoardServiceTest {
	private static final BoardRequestDTO dto = BoardRequestDTO.builder()
		.title("Title")
		.writer(1L)
		.build();
	// private static final BoardResponseDTO responseDto = BoardResponseDTO.builder()
	// 	.title("title")
	// 	.writer(MemberDTO.builder().id(1L).nickname("Hong").build())
	// 	.build();
	private final static Member member = MemberService2Test.getMemberEntity();
	private final static Board board =
		Board.builder()
			.title("Title")
			.writer(member)
			.content(new BoardContent("Content"))
			.build();

	private final BoardRepository repository = Mockito.mock(BoardRepository.class);
	private final MemberRepository memberRepository = Mockito.mock(MemberRepository.class);
	private final BoardService service = new BoardServiceImpl(repository, memberRepository);

	@Test
	void boardListTest() {
		Mockito.when(repository.findAll(ArgumentMatchers.any(Pageable.class)))
			.thenReturn(new PageImpl<>(List.of(board, board)));

		List<BoardResponseDTO> pageList = service.getPageList(1, 2);
		System.out.println("pageList = " + pageList);
		Assertions.assertEquals(2, pageList.size());
	}

	@Test
	void createTest() {
		Mockito.when(memberRepository.findById(1L)).thenReturn(Optional.of(member));
		Mockito.when(repository.save(ArgumentMatchers.any(Board.class))).then(AdditionalAnswers.returnsFirstArg());

		BoardResponseDTO createdBoard = service.createBoard(dto);

		Assertions.assertEquals(board.getTitle(), createdBoard.getTitle());
		Assertions.assertEquals((board.getWriter().getId()), createdBoard.getWriter().getId());
	}
}
