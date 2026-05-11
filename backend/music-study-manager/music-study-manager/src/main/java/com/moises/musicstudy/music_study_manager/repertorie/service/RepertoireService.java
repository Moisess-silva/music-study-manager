package com.moises.musicstudy.music_study_manager.repertorie.service;

import com.moises.musicstudy.music_study_manager.repertorie.dto.CreateRepertoireDTO;
import com.moises.musicstudy.music_study_manager.repertorie.dto.RepertoireResponseDTO;
import com.moises.musicstudy.music_study_manager.repertorie.entity.Repertoire;
import com.moises.musicstudy.music_study_manager.repertorie.repository.RepertoireRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RepertoireService {

    private final RepertoireRepository repository;

    public RepertoireResponseDTO create(
            CreateRepertoireDTO dto) {

        Repertoire repertoire = Repertoire.builder()
                .musicName(dto.getMusicName())
                .artist(dto.getArtist())
                .status(dto.getStatus())
                .build();

        repository.save(repertoire);

        return new RepertoireResponseDTO(
                repertoire.getId(),
                repertoire.getMusicName(),
                repertoire.getArtist(),
                repertoire.getStatus()
        );
    }

    public List<RepertoireResponseDTO> findAll() {

        return repository.findAll()
                .stream()
                .map(r -> new RepertoireResponseDTO(
                        r.getId(),
                        r.getMusicName(),
                        r.getArtist(),
                        r.getStatus()
                ))
                .toList();
    }

    public void delete(String id) {

        repository.deleteById(id);
    }
}