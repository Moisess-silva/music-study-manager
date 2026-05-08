package com.moises.musicstudy.music_study_manager.theory.controller;

import com.moises.musicstudy.music_study_manager.theory.dto.HarmonicFieldResponseDTO;
import com.moises.musicstudy.music_study_manager.theory.service.TheoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/theory")
@RequiredArgsConstructor
public class TheoryController {

    private final TheoryService theoryService;

    @GetMapping("/harmonic-field/{note}")
    public ResponseEntity<HarmonicFieldResponseDTO> getField(
            @PathVariable String note) {

        return ResponseEntity.ok(theoryService.calculate(note));
    }
}