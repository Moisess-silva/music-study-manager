package com.moises.musicstudy.music_study_manager.shared.utils;

public class StringUtils {

    public static boolean isBlank(
            String value
    ) {

        return value == null || value.isBlank();
    }
}