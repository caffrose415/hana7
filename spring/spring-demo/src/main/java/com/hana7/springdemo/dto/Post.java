package com.hana7.springdemo.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Post {
	private int id;
	private String title;
	private String content;
	private User writer;
	private Date date;
}
