package com.moises.musicstudy.music_study_manager.auth.controller;

import com.moises.musicstudy.music_study_manager.auth.dto.AuthResponseDTO;
import com.moises.musicstudy.music_study_manager.auth.dto.LoginRequestDTO;
import com.moises.musicstudy.music_study_manager.auth.dto.RegisterRequestDTO;
import com.moises.musicstudy.music_study_manager.auth.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponseDTO> register(
            @Valid
            @RequestBody RegisterRequestDTO dto) {

        return ResponseEntity.ok(authService.register(dto));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponseDTO> login(
            @RequestBody LoginRequestDTO dto) {

        return ResponseEntity.ok(authService.login(dto));
    }
}