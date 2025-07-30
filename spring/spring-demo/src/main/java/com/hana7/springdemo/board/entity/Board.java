package com.hana7.springdemo.board.entity;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.ColumnDefault;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.hana7.springdemo.jpa.entity.BaseEntity;
import com.hana7.springdemo.jpa.entity.Member;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Builder
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Board extends BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(length = 40, nullable = false)
	private String title;

	// @Column(length = 30, nullable = false)
	// private String writer;
	@ManyToOne
	@JoinColumn(name = "writer", nullable = false, foreignKey = @ForeignKey(name = "fk_Board_writer_Member"))
	@JsonBackReference
	private Member writer;

	@Column(nullable = false)
	@ColumnDefault("0")
	private int hit;

	@OneToOne(mappedBy = "board", cascade = CascadeType.ALL)
	private BoardContent content;

	@OneToMany(mappedBy = "board", cascade = CascadeType.ALL)
	private List<Reply> replies = new ArrayList<>();

	public void setContent(BoardContent content) {
		this.content = content;
		if (content != null)
			content.setBoard(this);
	}
}
