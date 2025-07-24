package com.hana7.springdemo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hana7.springdemo.dto.User;
import com.hana7.springdemo.service.UserService;
import com.hana7.springdemo.validation.Update;

import jakarta.validation.Valid;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/users")
@Log4j2
public class UserController {
	private UserService service;

	public UserController(UserService service){
		this.service=service;
	}
	@PostMapping("")
	public User registry(@RequestBody @Valid User user){
		log.debug("user={}",user);
		service.insert(user);
		return user;
	}

	@GetMapping("")
	public User[] findAll(){
		return service.getAllUser();
	}

	@GetMapping("/{id}")
	public User findUser(@PathVariable("id") Integer id){
		log.info("GET={}",id);
		return service.getUser(id);
	}

	@DeleteMapping("/{id}")
	public int deleteUser(@PathVariable("id") Integer id){
		service.deleteUser(id);
		return id;
	}

	@PutMapping("/{id}")
	public User updateUser(@RequestBody @Validated(Update.class) User user, @PathVariable("id") Integer id){
		user.setId(id);
		service.updateUser(user);
		return user;
	}

}
