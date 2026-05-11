package com.moises.musicstudy.music_study_manager.dashboard.controller;

import com.moises.musicstudy.music_study_manager.dashboard.dto.DashboardStatsDTO;
import com.moises.musicstudy.music_study_manager.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService service;

    @GetMapping("/stats")
    public ResponseEntity<DashboardStatsDTO>
    getStats() {

        return ResponseEntity.ok(
                service.getStats()
        );
    }
}