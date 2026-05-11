package com.moises.musicstudy.music_study_manager.theory.controller;

import com.moises.musicstudy.music_study_manager.theory.service.TheoryService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/theory")
@RequiredArgsConstructor
public class TheoryController {

    private final TheoryService service;

    @GetMapping("/major/{note}")
    public ResponseEntity<List<String>>
    majorField(
            @PathVariable String note
    ) {

        return ResponseEntity.ok(
                service.majorField(note)
        );
    }
}