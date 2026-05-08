package com.moises.musicstudy.music_study_manager.shared.validators;

public class BPMValidator {

    public static boolean isValid(
            Integer bpm
    ) {

        return bpm >= 20 && bpm <= 300;
    }
}