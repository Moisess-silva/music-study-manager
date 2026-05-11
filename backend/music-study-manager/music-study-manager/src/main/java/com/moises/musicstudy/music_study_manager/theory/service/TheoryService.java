package com.moises.musicstudy.music_study_manager.theory.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TheoryService {

    private final List<String> notes = List.of(
            "C","D","E","F","G","A","B"
    );

    public List<String> majorField(
            String root
    ) {

        int index =
                notes.indexOf(root);

        List<String> field =
                new ArrayList<>();

        field.add(notes.get(index) + "maj");
        field.add(notes.get((index+1)%7) + "min");
        field.add(notes.get((index+2)%7) + "min");
        field.add(notes.get((index+3)%7) + "maj");
        field.add(notes.get((index+4)%7) + "maj");
        field.add(notes.get((index+5)%7) + "min");
        field.add(notes.get((index+6)%7) + "dim");

        return field;
    }
}