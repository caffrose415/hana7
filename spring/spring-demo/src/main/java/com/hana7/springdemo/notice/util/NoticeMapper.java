package com.hana7.springdemo.notice.util;

import java.time.LocalDateTime;

import com.hana7.springdemo.notice.dto.Notice;
import com.hana7.springdemo.notice.dto.NoticeDTO;

public class NoticeMapper {
	public static NoticeDTO toDTO(Notice e) {
		return new NoticeDTO(
			e.getId(), e.getTitle(), e.getWriter(),
			e.getCreatedDate(), e.getWorkDate(), e.getBody()
		);
	}
	public static Notice toEntity(NoticeDTO d) {
		return Notice.builder()
			.title(d.getTitle())
			.writer(d.getWriter())
			.createdDate(LocalDateTime.now())
			.workDate(d.getWorkDate())
			.body(d.getBody())
			.build();
	}
}
