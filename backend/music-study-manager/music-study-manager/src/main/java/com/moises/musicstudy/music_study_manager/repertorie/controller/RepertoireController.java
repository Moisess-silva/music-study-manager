package com.moises.musicstudy.music_study_manager.repertorie.controller;

import com.moises.musicstudy.music_study_manager.repertorie.dto.CreateRepertoireDTO;
import com.moises.musicstudy.music_study_manager.repertorie.dto.RepertoireResponseDTO;
import com.moises.musicstudy.music_study_manager.repertorie.service.RepertoireService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/repertoire")
@RequiredArgsConstructor
public class RepertoireController {

    private final RepertoireService service;

    @PostMapping
    public ResponseEntity<RepertoireResponseDTO> create(
            @RequestBody CreateRepertoireDTO dto) {

        return ResponseEntity.status(201)
                .body(service.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<RepertoireResponseDTO>> findAll() {

        return ResponseEntity.ok(service.findAll());
    }
}