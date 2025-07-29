package com.hana7.springdemo.board.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class BoardDTO {
	private Long bno;
	private String title;
	private String content;
	private String writer;
	private LocalDateTime regDate;
	private Integer hit;
}
