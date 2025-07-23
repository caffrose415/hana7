package com.hana7.springdemo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
public class HiController {
	@GetMapping("/hi")
	public String hi(String name){
		log.debug("Debug");
		log.info("Hi! INFO");
		return "Hi! "+ name;
	}
}
