package com.hana7.springdemo.jpa.repository;

import java.util.List;
import java.util.stream.Stream;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.hana7.springdemo.jpa.entity.Subscriber;
import com.hana7.springdemo.jpa.entity.SubscriberRole;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class SubscriberRepositoryTest {
	@Autowired
	SubscriberRepository repository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Test
	void addTest() {
		int limit = 5;
		List<Subscriber> roleList = Stream.iterate(1, n -> n + 1).limit(limit)
			.map(n -> Subscriber.builder()
				.email(n + "@gmail.com")
				.nickname("sub" + n)
				.pwd(passwordEncoder.encode("pwd" + n))
				.social(false)
				.build()
				.addRole(SubscriberRole.ROLE_USER)
				.addRole(n > 3 ? SubscriberRole.ROLE_ADMIN : SubscriberRole.ROLE_MANAGER)
			).toList();

		repository.saveAll(roleList);

		Assertions.assertEquals(limit, repository.findAll().size());
	}

	@Test
	void readTest() {

	}
}
