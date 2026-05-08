package com.moises.musicstudy.music_study_manager.instruments.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateInstrumentDTO {

    private String name;

    private String type;

    private String brand;
}