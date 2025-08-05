package com.hana7.springdemo.jpa.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.board.dto.SearchCond;
import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.service.MemberService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/members")
public class MemberController {
	private final MemberService service;

	public MemberController(MemberService service) {
		this.service = service;
	}

	@GetMapping()
	@Tag(name = "회원 목록", description = "회원 페이징 목록")
	@Operation(summary = "/members?page=1...", description = "회원목록")
	List<MemberDTO> findMembers(
		@Parameter(example = """
			{
				"page": 1,
				"size": 5,
				"searchNickname": "x",
				"searchEmail:: null,
				"sortField": "id",
				"sortDirection" : "asc"
			}
			""")
		SearchCond searchCond) {
		System.out.println("searchCond = " + searchCond.getPager());
		return service.findAll(searchCond);
	}

	@GetMapping("{id}")
	@Tag(name = "회원 상세")
	@Operation(summary = "/members/2", description = "회원 작성된 글 포함")
	@Parameters({
		@Parameter(name = "id", description = "회원 번호", example = "2"),
	})
	MemberDTO getMember(@PathVariable Long id) {
		return service.findOne(id);
	}

	@DeleteMapping("{id}")
	ResponseEntity<?> remove(@PathVariable Long id) {
		long ret = service.remove(id);
		if (ret > 0)
			return ResponseEntity.ok(ret);

		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(id + "is Not Found!");
	}
}
