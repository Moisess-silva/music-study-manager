package com.moises.musicstudy.music_study_manager.users.service;

import com.moises.musicstudy.music_study_manager.users.dto.UpdateUserDTO;
import com.moises.musicstudy.music_study_manager.users.dto.UserResponseDTO;
import com.moises.musicstudy.music_study_manager.users.entity.User;
import com.moises.musicstudy.music_study_manager.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserResponseDTO me() {

        User user = getAuthenticatedUser();

        return new UserResponseDTO(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getWeeklyGoal()
        );
    }

    public UserResponseDTO update(UpdateUserDTO dto) {

        User user = getAuthenticatedUser();

        user.setUsername(dto.getUsername());

        user.setWeeklyGoal(dto.getWeeklyGoal());

        userRepository.save(user);

        return new UserResponseDTO(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getWeeklyGoal()
        );
    }

    private User getAuthenticatedUser() {

        return userRepository.findAll().get(0);
    }
}