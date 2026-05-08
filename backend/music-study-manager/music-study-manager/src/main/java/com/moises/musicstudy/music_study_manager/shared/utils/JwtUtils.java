package com.moises.musicstudy.music_study_manager.shared.utils;

public class JwtUtils {

    public static String extractBearer(
            String token
    ) {

        return token.replace("Bearer ", "");
    }
}