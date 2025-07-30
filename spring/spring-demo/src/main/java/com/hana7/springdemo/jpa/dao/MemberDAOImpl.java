package com.hana7.springdemo.jpa.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import com.hana7.springdemo.board.dto.PageResponseDTO;
import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.dto.MemberRequestDTO;
import com.hana7.springdemo.jpa.dto.MemberResponseDTO;
import com.hana7.springdemo.jpa.entity.Member;
import com.hana7.springdemo.jpa.repository.MemberRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class MemberDAOImpl implements MemberDAO {
	private final MemberRepository repository;

	@Override
	public List<MemberResponseDTO> findAll(String keyword, int page, int counterPage) {
		Pageable pageable = PageRequest.of(page - 1, counterPage, Sort.by("id").descending());
		Page<Member> result;

		if (keyword == null || keyword.isBlank()) {
			result = repository.findAll(pageable);
		} else {
			result = repository.findByNicknameContainingIgnoreCaseOrEmailContainingIgnoreCase(keyword, keyword,
				pageable);
		}

		return new PageResponseDTO<>(result, MemberDAOImpl::toDTO).getDtoList();
	}

	@Override
	public MemberDTO findOne() {
		return null;
	}

	@Override
	public MemberDTO save(MemberRequestDTO dto) {
		return null;
	}

	@Override
	public void delete(long id) {
		repository.deleteById(id);
	}

	public static MemberResponseDTO toDTO(Member member) {
		return MemberResponseDTO.builder()
			.id(member.getId())
			.nickname(member.getNickname())
			.email(member.getEmail())
			.bloodType(member.getBloodType())
			.build();
	}
}
