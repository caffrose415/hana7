// package com.hana7.springdemo.board.dto;
//
// import java.awt.print.Pageable;
//
// import org.springframework.data.domain.PageRequest;
// import org.springframework.data.domain.Sort;
//
// import lombok.Builder;
// import lombok.Getter;
// import lombok.Setter;
//
// @Builder
// @Getter
// @Setter
// public class SearchCond {
// 	private String searchNickname;
// 	private String searchEmail;
//
// 	@Builder.Default
// 	private Integer page = 1;
//
// 	private Integer size = 5;
//
// 	private String sortField = "id";
// 	private String sortDirection = "desc";
//
// 	public Pageable getPager() {
// 		Sort sort = Sort.by(Sort.Direction.fromString(sortDirection), sortField);
// 		return PageRequest.of(page - 1, size, sort);
// 	}
// }
