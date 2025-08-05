package com.hana7.springdemo.jpa.dto;

import java.util.List;

import com.hana7.springdemo.board.dto.BoardDetailResponseDTO;

import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter
@Setter
public class MemberMoreDetailResponseDTO extends MemberDTO {
	private int auth;
	private List<BoardDetailResponseDTO> boards;
	private List<UploadResponseDTO> images;
}
