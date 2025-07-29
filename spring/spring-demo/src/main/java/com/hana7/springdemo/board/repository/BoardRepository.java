package com.hana7.springdemo.board.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hana7.springdemo.board.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Integer> {
}
