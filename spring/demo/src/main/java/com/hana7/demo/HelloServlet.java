package com.hana7.demo;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class HelloServlet extends HttpServlet {
	@Override
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
		res.setContentType("text/plain");
		PrintWriter writer = res.getWriter();
		String name = req.getParameter("name");
		writer.println("Hello " + name + "!!");
	}
}

