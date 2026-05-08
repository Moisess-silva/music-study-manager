package com.moises.musicstudy.music_study_manager.theory.service;

import com.moises.musicstudy.music_study_manager.theory.dto.HarmonicFieldResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheoryService {

    public HarmonicFieldResponseDTO calculate(
            String note) {

        List<String> chords = List.of(
                note,
                "Dm",
                "Em",
                "F",
                "G",
                "Am",
                "Bdim"
        );

        return new HarmonicFieldResponseDTO(
                note,
                chords
        );
    }
}
