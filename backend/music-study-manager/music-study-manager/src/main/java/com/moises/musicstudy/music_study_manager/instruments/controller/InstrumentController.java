package com.moises.musicstudy.music_study_manager.instruments.controller;

import com.moises.musicstudy.music_study_manager.instruments.dto.CreateInstrumentDTO;
import com.moises.musicstudy.music_study_manager.instruments.dto.InstrumentResponseDTO;
import com.moises.musicstudy.music_study_manager.instruments.service.InstrumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/instruments")
@RequiredArgsConstructor
public class InstrumentController {

    private final InstrumentService service;

    @PostMapping
    public ResponseEntity<InstrumentResponseDTO> create(
            @RequestBody CreateInstrumentDTO dto) {

        return ResponseEntity.status(201)
                .body(service.create(dto));
    }

    @GetMapping
    public ResponseEntity<List<InstrumentResponseDTO>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }
}