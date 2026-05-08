package com.moises.musicstudy.music_study_manager.users.controller;

import com.moises.musicstudy.music_study_manager.users.dto.UpdateUserDTO;
import com.moises.musicstudy.music_study_manager.users.dto.UserResponseDTO;
import com.moises.musicstudy.music_study_manager.users.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<UserResponseDTO> me() {
        return ResponseEntity.ok(userService.me());
    }

    @PutMapping("/me")
    public ResponseEntity<UserResponseDTO> update(
            @RequestBody UpdateUserDTO dto) {

        return ResponseEntity.ok(userService.update(dto));
    }
}