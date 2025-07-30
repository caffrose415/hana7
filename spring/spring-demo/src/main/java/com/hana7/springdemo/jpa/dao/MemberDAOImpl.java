package com.hana7.springdemo.jpa.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import com.hana7.springdemo.board.dto.BoardSimpleDTO;
import com.hana7.springdemo.board.dto.PageResponseDTO;
import com.hana7.springdemo.board.dto.ReplySimpleDTO;
import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.dto.MemberDetailResponseDTO;
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

	@Override
	public MemberDetailResponseDTO findDetailById(long id) {
		Member member = repository.findById(id).orElseThrow();

		return MemberDetailResponseDTO.builder()
			.id(member.getId())
			.nickname(member.getNickname())
			.email(member.getEmail())
			.bloodType(member.getBloodType() != null ? member.getBloodType().name() : null)

			.boards(member.getBoards().stream()
				.map(board -> BoardSimpleDTO.builder()
					.id(board.getId())
					.title(board.getTitle())
					.createdAt(board.getCreatedAt())
					.build())
				.toList())

			.replies(member.getBoards().stream()
				.flatMap(board -> board.getReplies().stream())
				.filter(reply -> reply.getReplyer().getId().equals(member.getId()))
				.map(reply -> ReplySimpleDTO.builder()
					.id(reply.getId())
					.reply(reply.getReply())
					.createdAt(reply.getCreatedAt())
					.build())
				.toList())

			.build();
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
