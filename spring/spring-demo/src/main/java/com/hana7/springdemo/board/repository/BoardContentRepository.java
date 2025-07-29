package com.hana7.springdemo.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hana7.springdemo.board.entity.BoardContent;

public interface BoardContentRepository extends JpaRepository<BoardContent, Integer> {
}
