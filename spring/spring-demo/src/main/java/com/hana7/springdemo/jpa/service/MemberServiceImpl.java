package com.hana7.springdemo.jpa.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.hana7.springdemo.board.dto.SearchCond;
import com.hana7.springdemo.board.service.BoardServiceImpl;
import com.hana7.springdemo.jpa.dao.MemberDAO;
import com.hana7.springdemo.jpa.dto.MemberDTO;
import com.hana7.springdemo.jpa.dto.MemberDetailResponseDTO;
import com.hana7.springdemo.jpa.dto.MemberMoreDetailResponseDTO;
import com.hana7.springdemo.jpa.dto.MemberResponseDTO;
import com.hana7.springdemo.jpa.dto.UploadResponseDTO;
import com.hana7.springdemo.jpa.entity.Member;
import com.hana7.springdemo.jpa.entity.MemberImage;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	private final MemberDAO dao;

	@Override
	public List<MemberDTO> findAll(SearchCond searchCond) {
		List<Member> members;
		if (searchCond.needSearch()) {
			members = dao.findAll(searchCond);
		} else {
			members = dao.findAll(searchCond.getPager());
		}

		return members.stream()
			.map(MemberServiceImpl::toDTO).toList();
	}

	@Override
	public MemberDTO findOne(long id) {
		// return toDetailDTO(dao.findOne(id));
		return toMoreDetailDTO(dao.findOne(id));
	}

	@Override
	public int remove(long id) {
		return dao.remove(id);
	}

	@Override
	public void save(long memberId, List<UploadResponseDTO> upfiles) {
		Member member = dao.findOne(memberId);
		List<MemberImage> list = upfiles.stream().map(dto -> {
			MemberImage image = new MemberImage();
			image.setSaveName(dto.getFname());
			image.setMember(member);
			image.setSaveDir(dto.getSaveDir());
			image.setOrgName(dto.getOrgFname());
			image.setThumbnailName(dto.getThumbnailName());

			return image;
		}).toList();
		dao.saveAll(list);
	}

	public static MemberDTO toDTO(Member member) {
		return MemberResponseDTO.builder()
			.id(member.getId())
			.nickname(member.getNickname())
			.email(member.getEmail())
			.bloodType(member.getBloodType())
			.build();
	}

	public static MemberDTO toDetailDTO(Member member) {
		return MemberDetailResponseDTO.builder()
			.id(member.getId())
			.nickname(member.getNickname())
			.email(member.getEmail())
			.bloodType(member.getBloodType())
			.auth(member.getAuth())
			.boards(member.getBoards().stream().map(BoardServiceImpl::toDetailDTO).toList())
			.build();
	}

	public static MemberDTO toMoreDetailDTO(Member member) {
		return MemberMoreDetailResponseDTO.builder()
			.id(member.getId())
			.nickname(member.getNickname())
			.email(member.getEmail())
			.bloodType(member.getBloodType())
			.auth(member.getAuth())
			.boards(member.getBoards().stream().map(BoardServiceImpl::toDetailDTO).toList())
			.images(member.getMemberImages().stream().map(img -> UploadResponseDTO.builder()
				.orgFname(img.getOrgName())
				.fname(img.getSaveName())
				.saveDir(img.getSaveDir())
				.thumbnailName(img.getThumbnailName())
				.build()).toList())
			.build();
	}
}
