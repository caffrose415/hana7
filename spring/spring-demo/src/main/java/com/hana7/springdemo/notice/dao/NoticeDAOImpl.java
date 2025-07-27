package com.hana7.springdemo.notice.dao;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Repository;

import com.hana7.springdemo.notice.dto.Notice;
import com.hana7.springdemo.notice.repository.NoticeRepository;

@Repository
public class NoticeDAOImpl implements NoticeDAO {
	private final NoticeRepository noticeRepository;

	public NoticeDAOImpl(NoticeRepository noticeRepository) {
		this.noticeRepository = noticeRepository;
	}

	@Override
	public List<Notice> findAll() {
		return noticeRepository.findAll();
	}

	@Override
	public Optional<Notice> findById(UUID id) {
		return noticeRepository.findById(id);
	}

	@Override
	public Notice save(Notice notice) {
		return noticeRepository.save(notice);
	}

	@Override
	public void deleteById(UUID id) {
		noticeRepository.deleteById(id);
	}
}
