package com.moises.musicstudy.music_study_manager.theory.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HarmonicFieldResponseDTO {

    private String rootNote;

    private List<String> chords;
}
