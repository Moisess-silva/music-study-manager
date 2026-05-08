package com.moises.musicstudy.music_study_manager.reminders.controller;

import com.moises.musicstudy.music_study_manager.reminders.dto.ReminderResponseDTO;
import com.moises.musicstudy.music_study_manager.reminders.service.ReminderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/reminders")
@RequiredArgsConstructor
public class ReminderController {

    private final ReminderService service;

    @GetMapping("/pending")
    public ResponseEntity<List<ReminderResponseDTO>> pending() {

        return ResponseEntity.ok(service.findPending());
    }
}