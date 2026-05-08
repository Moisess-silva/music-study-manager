package com.moises.musicstudy.music_study_manager.auth.service;

import com.moises.musicstudy.music_study_manager.auth.dto.AuthResponseDTO;
import com.moises.musicstudy.music_study_manager.auth.dto.LoginRequestDTO;
import com.moises.musicstudy.music_study_manager.auth.dto.RegisterRequestDTO;
import com.moises.musicstudy.music_study_manager.auth.entity.User;
import com.moises.musicstudy.music_study_manager.auth.repository.AuthUserRepository;
import com.moises.musicstudy.music_study_manager.security.JwtService;
import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthUserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    public AuthResponseDTO register(RegisterRequestDTO dto) {

        if (userRepository.existsByEmail(dto.getEmail())) {

            throw new RuntimeException("Email already exists");
        }

        User user = User.builder()
                .username(dto.getUsername())
                .email(dto.getEmail())
                .password(
                        passwordEncoder.encode(dto.getPassword())
                )
                .roles(List.of("USER"))
                .weeklyGoal(300)
                .build();

        userRepository.save(user);

        String token = jwtService.generateToken(user);

        return new AuthResponseDTO(token);
    }

    public AuthResponseDTO login(LoginRequestDTO dto) {

        User user = userRepository.findByEmail(dto.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Invalid credentials"));

        boolean passwordMatches = passwordEncoder.matches(
                dto.getPassword(),
                user.getPassword()
        );

        if (!passwordMatches) {

            throw new RuntimeException("Invalid credentials");
        }

        String token = jwtService.generateToken(user);

        return new AuthResponseDTO(token);
    }
}