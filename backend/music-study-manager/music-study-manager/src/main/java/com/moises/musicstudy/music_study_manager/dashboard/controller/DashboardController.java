package com.moises.musicstudy.music_study_manager.dashboard.controller;

import com.moises.musicstudy.music_study_manager.dashboard.dto.DashboardResponseDTO;
import com.moises.musicstudy.music_study_manager.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService service;

    @GetMapping
    public ResponseEntity<DashboardResponseDTO> getData() {
        return ResponseEntity.ok(service.getDashboard());
    }
}