package com.hana7.springdemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.dto.Post;
import com.hana7.springdemo.dto.User;
import com.hana7.springdemo.service.PostService;
import com.hana7.springdemo.service.UserService;

@RestController
@RequestMapping("/posts")
public class PostController {
	private PostService service;
	private UserService userService;

	public PostController(PostService service,UserService userService){
		this.service=service;
		this.userService=userService;
	}

	@PostMapping("/{id}")
	public void writePost(@RequestBody Post post,@PathVariable int id){
		User user = userService.getUser(id);
		post.setWriter(user);
		service.writePost(post);
	}
	@GetMapping("")
	public Post[] getAllPost(){
		return service.getAllPost();
	}

	@GetMapping("/{postId}")
	public Post getPost(@PathVariable int postId){
		return service.getPost(postId);
	}

	@PutMapping("/{postId}")
	public void updatePost(@RequestBody Post post, @PathVariable int postId){
		post.setId(postId);
		service.updatePost(post);
	}

	@DeleteMapping("/{postId}")
	public void deletePost(@PathVariable int postId){
		service.deletePost(postId);
	}

}
