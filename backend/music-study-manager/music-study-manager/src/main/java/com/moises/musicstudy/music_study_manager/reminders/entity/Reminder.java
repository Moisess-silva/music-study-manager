package com.moises.musicstudy.music_study_manager.reminders.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "reminders")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reminder {

    @Id
    private String id;

    private String userId;

    private String instrumentId;

    private String type;

    private LocalDate scheduledDate;

    private Boolean sent;
}