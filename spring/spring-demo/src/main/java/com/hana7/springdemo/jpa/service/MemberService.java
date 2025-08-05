package com.hana7.springdemo.jpa.service;

import java.util.List;

import com.hana7.springdemo.board.dto.SearchCond;
import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.dto.UploadResponseDTO;

public interface MemberService {
	List<MemberDTO> findAll(SearchCond searchCond);

	MemberDTO findOne(long id);

	int remove(long id);

	void save(long memberId, List<UploadResponseDTO> upfiles);
}
