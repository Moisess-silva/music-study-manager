package com.moises.musicstudy.music_study_manager.dashboard.service;

import com.moises.musicstudy.music_study_manager.dashboard.dto.DashboardStatsDTO;

import com.moises.musicstudy.music_study_manager.training.entity.TrainingSession;

import com.moises.musicstudy.music_study_manager.training.repository.TrainingRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final TrainingRepository repository;

    public DashboardStatsDTO getStats() {

        List<TrainingSession> trainings =
                repository.findAll();

        long totalTrainings =
                trainings.size();

        double totalMinutes =
                trainings.stream()
                        .mapToDouble(
                                TrainingSession::getDuration
                        )
                        .sum();

        double averageBpm =
                trainings.stream()
                        .mapToDouble(
                                TrainingSession::getBpm
                        )
                        .average()
                        .orElse(0);

        return new DashboardStatsDTO(
                totalTrainings,
                totalMinutes,
                averageBpm
        );
    }
}