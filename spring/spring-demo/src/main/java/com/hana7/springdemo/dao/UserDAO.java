package com.hana7.springdemo.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.hana7.springdemo.dto.User;

@Repository
@Mapper
public interface UserDAO {
	public User getUser(int id);
	public void insert(User user);
	public User[] getAllUser();
	public void deleteUser(int id);
	public void updateUser( User user);
}
