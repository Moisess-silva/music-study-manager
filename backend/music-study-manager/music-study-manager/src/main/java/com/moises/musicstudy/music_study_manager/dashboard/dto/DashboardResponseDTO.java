package com.moises.musicstudy.music_study_manager.dashboard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DashboardResponseDTO {

    private Integer totalMinutes;

    private Integer totalSessions;
}