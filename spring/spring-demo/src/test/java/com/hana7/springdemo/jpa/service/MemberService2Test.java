package com.hana7.springdemo.jpa.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import com.hana7.springdemo.board.dto.BoardResponseDTO;
import com.hana7.springdemo.board.dto.SearchCond;
import com.hana7.springdemo.board.entity.Board;
import com.hana7.springdemo.board.entity.BoardContent;
import com.hana7.springdemo.board.repository.BoardRepository;
import com.hana7.springdemo.board.service.BoardService;
import com.hana7.springdemo.board.service.BoardServiceImpl;
import com.hana7.springdemo.jpa.dao.MemberDAO;
import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.entity.BloodType;
import com.hana7.springdemo.jpa.entity.Member;
import com.hana7.springdemo.jpa.repository.MemberRepository;

public class MemberService2Test {
	private final MemberDAO dao = Mockito.mock(MemberDAO.class);
	private final MemberService service = new MemberServiceImpl(dao);

	private final BoardRepository boardRepository = Mockito.mock(BoardRepository.class);
	private final MemberRepository memberRepository = Mockito.mock(MemberRepository.class);

	private final BoardService boardService = new BoardServiceImpl(boardRepository, memberRepository);

	public static Member getMemberEntity() {
		return Member.builder()
			.id(1L)
			.nickname("Hong")
			.email("hong@gmail.com")
			.bloodType(BloodType.B)
			.build();
	}

	@Test
	void boardListTest() {
		Board board1 = Board.builder()
			.id(1)
			.title("Title 1")
			.writer(getMemberEntity())
			.content(new BoardContent("Content 1"))
			.build();
		Board board2 = Board.builder()
			.id(2)
			.title("Title 2")
			.writer(getMemberEntity())
			.content(new BoardContent("Content 2"))
			.build();

		List<Board> boardList = List.of(board1, board2);
		Page<Board> page = new PageImpl<>(boardList);

		PageRequest pageRequest = PageRequest.of(0, 2, Sort.by(Sort.Order.desc("id")));

		Mockito.when(boardRepository.findAll(pageRequest)).thenReturn(page);

		List<BoardResponseDTO> result = boardService.getPageList(1, 2);

		assertEquals(2, result.size());
		assertEquals("Title 1", result.get(0).getTitle());
		assertEquals("Title 2", result.get(1).getTitle());
	}

	@Test
	void listTest() {
		Member member = getMemberEntity();
		SearchCond searchCond = SearchCond.builder()
			.page(1)
			.size(2)
			.build();

		Mockito.when(dao.findAll(searchCond.getPager())).thenReturn(List.of(member, member));

		List<MemberDTO> list = service.findAll(searchCond);
		Assertions.assertEquals(2, list.size());
	}

	@Test
	void removeTest() {
		Mockito.when(service.remove(getMemberEntity().getId())).thenReturn(1);
		// .thenReturn(member.getId().intValue());

		int affectedRowCount = service.remove(1L);
		assertEquals(1, affectedRowCount);
	}
}
