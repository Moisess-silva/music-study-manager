package com.moises.musicstudy.music_study_manager.theory.utils;

import java.util.List;

public class ScaleUtils {

    public static List<String> majorScale(
            String root
    ) {

        return List.of(
                root,
                "D",
                "E",
                "F",
                "G",
                "A",
                "B"
        );
    }
}