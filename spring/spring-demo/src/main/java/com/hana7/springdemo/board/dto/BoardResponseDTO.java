package com.hana7.springdemo.board.dto;

import java.time.LocalDateTime;

import com.hana7.springdemo.jpa.dto.MemberResponseDTO;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter
@Setter
public class BoardResponseDTO {
	private int id;
	private String title;
	private MemberResponseDTO writer;
	private int hit;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;

	// private String content;
}
