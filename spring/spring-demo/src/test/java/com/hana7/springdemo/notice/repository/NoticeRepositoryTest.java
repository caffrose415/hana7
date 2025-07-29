package com.hana7.springdemo.notice.repository;

import static org.assertj.core.api.Assertions.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import com.hana7.springdemo.notice.dto.Notice;

@DataJpaTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)
class NoticeRepositoryTest {
	@Autowired
	private NoticeRepository noticeRepository;

	private final Notice sample = Notice.builder()
		.title("테스트 공지")
		.writer("Tester")
		.createdDate(LocalDateTime.now())
		.workDate(LocalDateTime.now().plusDays(1))
		.body("This is a test notice.")
		.build();

	@Test
	@Order(1)
	void saveAndFindById() {

		Notice saved = noticeRepository.saveAndFlush(sample);

		assertThat(saved.getId()).isInstanceOf(UUID.class);

		Optional<Notice> found = noticeRepository.findById(saved.getId());
		assertThat(found).isPresent();
		assertThat(found.get().getTitle()).isEqualTo("테스트 공지");
	}

	@Test
	@Order(2)
	void findAllContainsSaved() {
		noticeRepository.saveAndFlush(sample);

		List<Notice> all = noticeRepository.findAll();
		assertThat(all).isNotEmpty()
			.anyMatch(n -> n.getWriter().equals("Tester"));
	}

	@Test
	@Order(3)
	void deleteById() {
		Notice saved = noticeRepository.saveAndFlush(sample);
		UUID id = saved.getId();

		noticeRepository.deleteById(id);

		assertThat(noticeRepository.findById(id)).isEmpty();
	}
}
