package com.hana7.springdemo.jpa.dto;

import java.util.List;

import com.hana7.springdemo.board.dto.BoardSimpleDTO;
import com.hana7.springdemo.board.dto.ReplySimpleDTO;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MemberDetailResponseDTO {
	private Long id;
	private String nickname;
	private String email;
	private String bloodType;

	private List<BoardSimpleDTO> boards;
	private List<ReplySimpleDTO> replies;
}
