package com.hana7.springdemo.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.hana7.springdemo.dto.Post;

@Repository
@Mapper
public interface PostDAO {
	public void writePost(Post post);
	public Post[] getAllPost();
	public void updatePost(Post post);
	public Post getPost(int postId);
	public void deletePost(int postId);
}
