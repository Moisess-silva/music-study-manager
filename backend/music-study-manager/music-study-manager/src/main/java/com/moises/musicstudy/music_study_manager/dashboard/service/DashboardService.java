package com.moises.musicstudy.music_study_manager.dashboard.service;

import com.moises.musicstudy.music_study_manager.dashboard.dto.DashboardResponseDTO;
import com.moises.musicstudy.music_study_manager.training.entity.TrainingSession;
import com.moises.musicstudy.music_study_manager.training.repository.TrainingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final TrainingRepository trainingRepository;

    public DashboardResponseDTO getDashboard() {

        List<TrainingSession> sessions =
                trainingRepository.findAll();

        int totalMinutes = sessions.stream()
                .mapToInt(TrainingSession::getDuration)
                .sum();

        int totalSessions = sessions.size();

        return new DashboardResponseDTO(
                totalMinutes,
                totalSessions
        );
    }
}