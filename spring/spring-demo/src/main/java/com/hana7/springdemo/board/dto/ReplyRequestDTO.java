package com.hana7.springdemo.board.dto;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter @Setter
public class ReplyRequestDTO {
	@Column(length = 1000, nullable = false)
	private String reply;

	@Column(length = 30, nullable = false)
	private String replyer;

}
