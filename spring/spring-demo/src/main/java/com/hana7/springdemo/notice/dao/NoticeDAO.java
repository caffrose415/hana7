package com.hana7.springdemo.notice.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.hana7.springdemo.notice.dto.Notice;

public interface NoticeDAO {
	List<Notice> findAll();
	Optional<Notice> findById(UUID id);
	Notice save(Notice notice);
	void deleteById(UUID id);
}
