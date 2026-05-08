package com.moises.musicstudy.music_study_manager.shared.utils;

public class FileUtils {

    public static String extractExtension(
            String filename
    ) {

        return filename.substring(
                filename.lastIndexOf(".")
        );
    }
}
