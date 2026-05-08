package com.moises.musicstudy.music_study_manager.theory.utils;

import java.util.List;

public class ChordUtils {

    public static List<String> majorChord(
            String root
    ) {

        return List.of(
                root,
                "E",
                "G"
        );
    }
}