package com.hana7.springdemo.jpa.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="memo")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
public class Memo extends BaseEntity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int mno;

	@Column(length = 200, nullable = false)
	private String memoText;
}
