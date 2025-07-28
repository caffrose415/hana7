package com.hana7.springdemo.notice.service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.hana7.springdemo.notice.dao.NoticeDAO;
import com.hana7.springdemo.notice.dto.Notice;
import com.hana7.springdemo.notice.dto.NoticeDTO;
import com.hana7.springdemo.notice.util.NoticeMapper;

@Service
public class NoticeServiceImpl implements NoticeService {

	private final NoticeDAO noticeDao;

	public NoticeServiceImpl(NoticeDAO noticeDao) {
		this.noticeDao = noticeDao;
	}

	@Override
	public List<NoticeDTO> listNotices() {
		return noticeDao.findAll().stream().map(NoticeMapper::toDTO).collect(Collectors.toList());
	}

	@Override
	public NoticeDTO getNotice(UUID id) {
		Notice notice = noticeDao.findById(id).orElseThrow();
		return NoticeMapper.toDTO(notice);
	}

	@Override
	public NoticeDTO createNotice(NoticeDTO dto) {
		Notice notice = noticeDao.save(NoticeMapper.toEntity(dto));
		return NoticeMapper.toDTO(notice);
	}

	@Override
	public NoticeDTO updateNotice(UUID id, NoticeDTO dto) {
		Notice entity = noticeDao.findById(id).orElseThrow();
		entity.setTitle(dto.getTitle());
		entity.setBody(dto.getBody());
		entity.setWorkDate(dto.getWorkDate());
		Notice notice = noticeDao.save(entity);
		return NoticeMapper.toDTO(notice);
	}

	@Override
	public void deleteNotice(UUID id) {
		noticeDao.deleteById(id);
	}
}
