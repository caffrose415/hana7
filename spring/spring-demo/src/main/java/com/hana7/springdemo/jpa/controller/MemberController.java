package com.hana7.springdemo.jpa.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.jpa.dto.MemberDetailResponseDTO;
import com.hana7.springdemo.jpa.dto.MemberRequestDTO;
import com.hana7.springdemo.jpa.dto.MemberResponseDTO;
import com.hana7.springdemo.jpa.service.MemberService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
	private final MemberService memberService;

	@GetMapping({"/paging", "/paging/{keyword}"})
	List<MemberResponseDTO> findAll(@PathVariable(required = false) String keyword,
		@RequestParam(defaultValue = "1") int page,
		@RequestParam(defaultValue = "10") int counterPage) {
		return memberService.findAll(keyword, page, counterPage);
	}

	@PostMapping()
	MemberResponseDTO save(MemberRequestDTO dto) {
		return null;
	}

	@GetMapping("/{id}")
	public void deleteMember(@PathVariable long id) {
		memberService.remove(id);
	}

	@GetMapping("/{id}/detail")
	public MemberDetailResponseDTO memberDetail(@PathVariable long id) {
		return memberService.getDetail(id);
	}

}
