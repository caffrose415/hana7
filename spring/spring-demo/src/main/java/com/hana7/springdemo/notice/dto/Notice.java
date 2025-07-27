package com.hana7.springdemo.notice.dto;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Notice {
	@Id
	@GeneratedValue
	private UUID id;
	private String title;
	private String writer;
	private LocalDateTime createdDate;
	private LocalDateTime workDate;
	private String body;
}
