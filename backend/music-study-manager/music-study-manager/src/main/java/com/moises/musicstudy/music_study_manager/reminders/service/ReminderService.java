package com.moises.musicstudy.music_study_manager.reminders.service;

import com.moises.musicstudy.music_study_manager.reminders.dto.ReminderResponseDTO;
import com.moises.musicstudy.music_study_manager.reminders.repository.ReminderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReminderService {

    private final ReminderRepository repository;

    public List<ReminderResponseDTO> findPending() {

        return repository.findBySent(false)
                .stream()
                .map(reminder -> new ReminderResponseDTO(
                        reminder.getId(),
                        reminder.getType(),
                        reminder.getScheduledDate()
                ))
                .toList();
    }
}