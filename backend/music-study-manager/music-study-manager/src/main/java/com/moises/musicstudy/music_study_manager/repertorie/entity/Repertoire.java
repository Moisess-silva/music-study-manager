package com.moises.musicstudy.music_study_manager.repertorie.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "repertoires")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Repertoire {

    @Id
    private String id;

    private String userId;

    private String musicName;

    private String artist;

    private String status;
}