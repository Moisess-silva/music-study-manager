package com.moises.musicstudy.music_study_manager.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DashboardStatsDTO {

    private long totalTrainings;

    private double totalMinutes;

    private double averageBpm;
}