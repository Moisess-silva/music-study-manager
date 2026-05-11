package com.moises.musicstudy.music_study_manager.training.controller;

import com.moises.musicstudy.music_study_manager.training.dto.CreateTrainingDTO;
import com.moises.musicstudy.music_study_manager.training.dto.TrainingResponseDTO;
import com.moises.musicstudy.music_study_manager.training.service.TrainingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/training")
@RequiredArgsConstructor
public class TrainingController {

    private final TrainingService service;

    @PostMapping
    public ResponseEntity<TrainingResponseDTO> create(
            @RequestBody CreateTrainingDTO dto) {

        return ResponseEntity.status(201)
                .body(service.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<TrainingResponseDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id
    ) {

        service.delete(id);

        return ResponseEntity
                .noContent()
                .build();
    }
}