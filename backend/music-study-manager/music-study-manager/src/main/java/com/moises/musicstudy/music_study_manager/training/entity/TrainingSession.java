package com.moises.musicstudy.music_study_manager.training.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "training_sessions")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TrainingSession {

    @Id
    private String id;

    private String userId;

    private String instrumentId;

    private Integer duration;

    private String category;

    private Integer bpm;

    private String notes;

    private List<String> attachments;

    private LocalDateTime createdAt;
}