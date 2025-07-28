package com.hana7.springdemo.jpa.entity;

import java.time.Instant;
import java.time.LocalDateTime;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.ToString;

@MappedSuperclass
@Getter
@ToString
public class BaseEntity {

	@Column(updatable = false,nullable = false)
	@CreationTimestamp
	@ColumnDefault("CURRENT_TIMESTAMP(6)")
	private LocalDateTime createdAt;

	@UpdateTimestamp
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",nullable = false)
	private LocalDateTime updatedAt;

}
