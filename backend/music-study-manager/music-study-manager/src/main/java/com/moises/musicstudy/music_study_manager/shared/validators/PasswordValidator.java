package com.moises.musicstudy.music_study_manager.shared.validators;

public class PasswordValidator {

    public static boolean isStrong(
            String password
    ) {

        return password.length() >= 6;
    }
}
