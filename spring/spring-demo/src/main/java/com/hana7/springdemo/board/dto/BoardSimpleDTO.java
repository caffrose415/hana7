// BoardSimpleDTO.java
package com.hana7.springdemo.board.dto;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BoardSimpleDTO {
	private int id;
	private String title;
	private LocalDateTime createdAt;
}
