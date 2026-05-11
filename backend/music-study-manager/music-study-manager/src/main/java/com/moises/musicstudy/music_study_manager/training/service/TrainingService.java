package com.moises.musicstudy.music_study_manager.training.service;

import com.moises.musicstudy.music_study_manager.training.dto.CreateTrainingDTO;
import com.moises.musicstudy.music_study_manager.training.dto.TrainingResponseDTO;
import com.moises.musicstudy.music_study_manager.training.entity.TrainingSession;
import com.moises.musicstudy.music_study_manager.training.repository.TrainingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TrainingService {

    private final TrainingRepository repository;

    public TrainingResponseDTO create(CreateTrainingDTO dto) {

        TrainingSession session = TrainingSession.builder()
                .instrumentId(dto.getInstrumentId())
                .duration(dto.getDuration())
                .category(dto.getCategory())
                .bpm(dto.getBpm())
                .notes(dto.getNotes())
                .attachments(dto.getAttachments())
                .createdAt(LocalDateTime.now())
                .build();

        repository.save(session);

        return mapToDTO(session);
    }

    public List<TrainingResponseDTO> findAll() {

        return repository.findAll()
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    private TrainingResponseDTO mapToDTO(
            TrainingSession session) {

        return new TrainingResponseDTO(
                session.getId(),
                session.getDuration(),
                session.getCategory(),
                session.getBpm()
        );
    }

    public void delete(String id) {

        repository.deleteById(id);
    }
}