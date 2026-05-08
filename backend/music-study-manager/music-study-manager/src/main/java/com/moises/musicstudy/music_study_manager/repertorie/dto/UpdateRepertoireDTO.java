package com.moises.musicstudy.music_study_manager.repertorie.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateRepertoireDTO {

    private String musicName;

    private String artist;

    private String status;
}