package com.hana7.springdemo.jpa.dao;

import java.util.List;

import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.dto.MemberRequestDTO;
import com.hana7.springdemo.jpa.dto.MemberResponseDTO;

public interface MemberDAO {
	List<MemberResponseDTO> findAll(String keyword, int page, int counterPage);

	MemberDTO findOne();

	MemberDTO save(MemberRequestDTO dto);

	void delete(long id);
}
