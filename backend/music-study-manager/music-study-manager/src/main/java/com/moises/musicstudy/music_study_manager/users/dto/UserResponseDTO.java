package com.moises.musicstudy.music_study_manager.users.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDTO {

    private String id;

    private String username;

    private String email;

    private Integer weeklyGoal;
}