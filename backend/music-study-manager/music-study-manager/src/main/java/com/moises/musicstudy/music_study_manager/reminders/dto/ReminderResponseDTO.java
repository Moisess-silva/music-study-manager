package com.moises.musicstudy.music_study_manager.reminders.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReminderResponseDTO {

    private String id;

    private String type;

    private LocalDate scheduledDate;
}