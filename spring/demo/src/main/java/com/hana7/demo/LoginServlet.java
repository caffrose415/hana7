package com.hana7.demo;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {
	@Override
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
		res.setContentType("text/html");
		PrintWriter writer = res.getWriter();
		writer.println("<form>");
		writer.println("<input name='email'>");
		writer.println("<button type='submit'>Login</button>");
		writer.println("</form>");
	}
}
