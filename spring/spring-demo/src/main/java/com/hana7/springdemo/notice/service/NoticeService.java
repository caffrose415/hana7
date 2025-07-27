package com.hana7.springdemo.notice.service;

import java.util.List;
import java.util.UUID;

import com.hana7.springdemo.notice.dto.Notice;
import com.hana7.springdemo.notice.dto.NoticeDTO;

public interface NoticeService {
	List<NoticeDTO> listNotices();
	NoticeDTO getNotice(UUID id);
	NoticeDTO createNotice(NoticeDTO dto);
	NoticeDTO updateNotice(UUID id, NoticeDTO dto);
	void deleteNotice(UUID id);
}
