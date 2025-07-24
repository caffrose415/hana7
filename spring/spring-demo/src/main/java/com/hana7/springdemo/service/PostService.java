package com.hana7.springdemo.service;

import org.springframework.stereotype.Service;

import com.hana7.springdemo.dao.PostDAO;
import com.hana7.springdemo.dto.Post;

@Service
public class PostService {
	private PostDAO repository;

	public PostService(PostDAO repository){
		this.repository=repository;
	}

	public void writePost(Post post){
		repository.writePost(post);
	}

	public Post[] getAllPost(){
		return repository.getAllPost();
	}

	public void updatePost(Post post){
		repository.updatePost(post);
	}

	public Post getPost(int postId) {
		return repository.getPost(postId);
	}

	public void deletePost(int postId) {
		repository.deletePost(postId);
	}
}
