package com.hana7.springdemo.jpa.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
public class MemberImage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String orgName;

	private String saveName;

	private String saveDir;

	private String thumbnailName;

	@ManyToOne
	@JoinColumn(name = "member", nullable = false, foreignKey = @ForeignKey(name = "fk_MemberImage_Member"))
	@OnDelete(action = OnDeleteAction.CASCADE)
	private Member member;
}
