package com.moises.musicstudy.music_study_manager.instruments.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "instruments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Instrument {

    @Id
    private String id;

    private String userId;

    private String name;

    private String type;

    private String brand;

    private LocalDate lastMaintenance;
}