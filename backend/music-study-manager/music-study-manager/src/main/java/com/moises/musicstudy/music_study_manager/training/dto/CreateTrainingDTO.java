package com.moises.musicstudy.music_study_manager.training.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateTrainingDTO {

    private String instrumentId;

    private Integer duration;

    private String category;

    private Integer bpm;

    private String notes;

    private List<String> attachments;
}