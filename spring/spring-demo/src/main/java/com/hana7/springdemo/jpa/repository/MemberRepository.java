package com.hana7.springdemo.jpa.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.hana7.springdemo.jpa.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
	Page<Member> findByNicknameContainingIgnoreCaseOrEmailContainingIgnoreCase(String keyword, String keyword1,
		Pageable pageable);
}
