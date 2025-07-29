package com.hana7.springdemo.board.dto;

import java.time.LocalDateTime;


import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter @Setter
public class BoardResponseDTO {
	private int id;
	private String title;
	private String writer;
	private int hit;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;

}
