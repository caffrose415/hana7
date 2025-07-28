package com.hana7.springdemo.notice.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hana7.springdemo.notice.dto.Notice;

public interface NoticeRepository extends JpaRepository<Notice, UUID> {
}
