package com.hana7.demo;

import java.io.PrintWriter;

public class LoginController {
	public String loginForm(){
		return "<form>"
			+ "<input name='email'>"
			+ "<button type='submit'>Login</button>"
			+ "</form>";
	}
}
