package com.moises.musicstudy.music_study_manager.theory.utils;

import java.util.List;

public class HarmonicFieldCalculator {
    public static class HarmonicFieldUtils {

        public static List<String> majorField(
                String note
        ) {

            return List.of(
                    note,
                    "Dm",
                    "Em",
                    "F",
                    "G",
                    "Am",
                    "Bdim"
            );
        }
    }
}
