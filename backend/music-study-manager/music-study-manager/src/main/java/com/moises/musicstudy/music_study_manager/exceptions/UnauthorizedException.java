package com.moises.musicstudy.music_study_manager.exceptions;

public class UnauthorizedException
        extends RuntimeException {

    public UnauthorizedException(
            String message
    ) {

        super(message);
    }
}