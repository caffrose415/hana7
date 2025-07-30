package com.hana7.springdemo.jpa.service;

import java.util.List;

import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.dto.MemberDetailResponseDTO;
import com.hana7.springdemo.jpa.dto.MemberRequestDTO;
import com.hana7.springdemo.jpa.dto.MemberResponseDTO;

public interface MemberService {
	List<MemberResponseDTO> findAll(String keyword, int page, int counterPage);

	MemberDTO findOne();

	MemberDTO save(MemberRequestDTO dto);

	void remove(long id);

	MemberDetailResponseDTO getDetail(long id);
}
