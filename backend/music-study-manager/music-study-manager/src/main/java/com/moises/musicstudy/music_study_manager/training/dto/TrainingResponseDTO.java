package com.moises.musicstudy.music_study_manager.training.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TrainingResponseDTO {

    private String id;

    private Integer duration;

    private String category;

    private Integer bpm;
}