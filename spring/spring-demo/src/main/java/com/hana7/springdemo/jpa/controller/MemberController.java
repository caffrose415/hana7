package com.hana7.springdemo.jpa.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.board.dto.ErrorResponseDTO;
import com.hana7.springdemo.board.dto.SearchCond;
import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.service.MemberService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/members")
public class MemberController {
	private final MemberService service;

	public MemberController(MemberService service) {
		this.service = service;
	}

	@GetMapping()
	@Tag(name = "전체 찾기", description = "설명설명")
	@Operation(summary = "/members?page = 1 ...", description = "설명설명")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "요청에 성공하셨습니다.",
			content = @Content(mediaType = "application/json", schema = @Schema(implementation = MemberDTO.class))),
		@ApiResponse(responseCode = "404", description = "회원목록이 비었습니다.",
			content = @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResponseDTO.class)))
	})
	List<MemberDTO> findMembers(
		@Parameter(description = "검색 및 페이지 조건",
			example = """
				    {
				        "page": 1,
				        "size": 5,
				        "searchNickname": "x",
				        "sortField": "id",
				        "sortDirection": "desc"
				    }
				""") SearchCond searchCond) {
		System.out.println("searchCond = " + searchCond.getPager());
		return service.findAll(searchCond);
	}

	@GetMapping("{id}")
	@Tag(name = "회원 상세 정보", description = "회원 상세 목록")
	@Parameter(name = "id", description = "회원상세 ", example = "2")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "요청에 성공하였습니다.", content = @Content(mediaType = "application/json", schema = @Schema(implementation = MemberDTO.class))),
		@ApiResponse(responseCode = "404", description = "해당 회원을 찾을 수 없습니다.", content = @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResponseDTO.class)))
	})
	MemberDTO getMember(@PathVariable Long id) {
		return service.findOne(id);
	}

	@DeleteMapping("{id}")
	@Tag(name = "회원 삭제", description = "회원 삭제")
	@Parameter(name = "id", description = "회원 삭제 id", example = "2")
	@ApiResponses(value = {
		@ApiResponse(responseCode = "200", description = "삭제 완료"),
		@ApiResponse(responseCode = "404", description = "삭제 실패",
			content = @Content(mediaType = "application/json", schema = @Schema(implementation = ErrorResponseDTO.class)))
	})
	int remove(@PathVariable Long id) {
		return service.remove(id);
	}
}
