package com.hana7.demo;

import java.io.IOException;
import java.io.PrintWriter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@SpringBootApplication
public class DemoApplication {
	public static void main(String[] args){
		new TomcatServletWebServerFactory().getWebServer((ServletContext servletContext)->{
				servletContext.addServlet("helloServlet", new HelloServlet()).addMapping("/hello-servlet");

				servletContext.addServlet("loginServlet", new LoginServlet()).addMapping("/login");

		}).start();
	}

}
