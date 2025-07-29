package com.hana7.springdemo.board.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class BoardResponseDTO {
	private int id;
	private String title;
	private String writer;
	private int hit;
	private LocalDateTime createdAt;
}
