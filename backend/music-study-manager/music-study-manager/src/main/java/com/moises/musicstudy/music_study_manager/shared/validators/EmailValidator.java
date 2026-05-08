package com.moises.musicstudy.music_study_manager.shared.validators;

public class EmailValidator {

    public static boolean isValid(
            String email
    ) {

        return email != null
                && email.contains("@");
    }
}