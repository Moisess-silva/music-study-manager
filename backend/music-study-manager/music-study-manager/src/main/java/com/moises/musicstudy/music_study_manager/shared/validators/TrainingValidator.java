package com.moises.musicstudy.music_study_manager.shared.validators;

public class TrainingValidator {

    public static boolean isValidDuration(
            Integer duration
    ) {

        return duration > 0;
    }
}