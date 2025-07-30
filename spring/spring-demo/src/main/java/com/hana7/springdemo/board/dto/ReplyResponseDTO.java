package com.hana7.springdemo.board.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.hana7.springdemo.jpa.dto.MemberResponseDTO;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class ReplyResponseDTO {
	private int id;
	private String reply;
	private MemberResponseDTO replyer;

	@JsonBackReference
	private BoardResponseDTO board;
}
