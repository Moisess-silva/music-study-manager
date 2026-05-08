package com.moises.musicstudy.music_study_manager.theory.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TheoryRequestDTO {

    private String rootNote;

    private String scaleType;
}