package com.hana7.springdemo.notice.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.notice.dto.NoticeDTO;
import com.hana7.springdemo.notice.service.NoticeService;

@RestController
@RequestMapping("/notices")
public class NoticeController {
	private final NoticeService noticeService;

	public NoticeController(NoticeService noticeService) {
		this.noticeService = noticeService;
	}

	@GetMapping
	public List<NoticeDTO> list(){
		return noticeService.listNotices();
	}

	@PostMapping
	public ResponseEntity<NoticeDTO> createNotice(@RequestBody NoticeDTO dto){
		NoticeDTO notice = noticeService.createNotice(dto);
		return ResponseEntity.status(HttpStatus.CREATED).body(notice);
	}

	@GetMapping("/{id}")
	public NoticeDTO getNotice(@PathVariable UUID id){
		return noticeService.getNotice(id);
	}

	@PutMapping("/{id}")
	public NoticeDTO updateNotice(@PathVariable UUID id, @RequestBody NoticeDTO dto){
		return noticeService.updateNotice(id,dto);
	}

	@DeleteMapping("/{id}")
	public void deleteNotice(@PathVariable UUID id){
		noticeService.deleteNotice(id);
	}
}
