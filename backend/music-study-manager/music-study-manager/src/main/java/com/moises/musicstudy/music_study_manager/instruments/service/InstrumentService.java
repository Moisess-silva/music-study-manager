package com.moises.musicstudy.music_study_manager.instruments.service;

import com.moises.musicstudy.music_study_manager.instruments.dto.CreateInstrumentDTO;
import com.moises.musicstudy.music_study_manager.instruments.dto.InstrumentResponseDTO;
import com.moises.musicstudy.music_study_manager.instruments.entity.Instrument;
import com.moises.musicstudy.music_study_manager.instruments.repository.InstrumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InstrumentService {

    private final InstrumentRepository repository;

    public InstrumentResponseDTO create(CreateInstrumentDTO dto) {

        Instrument instrument = Instrument.builder()
                .name(dto.getName())
                .type(dto.getType())
                .brand(dto.getBrand())
                .lastMaintenance(LocalDate.now())
                .build();

        repository.save(instrument);

        return mapToDTO(instrument);
    }

    public List<InstrumentResponseDTO> findAll() {

        return repository.findAll()
                .stream()
                .map(this::mapToDTO)
                .toList();
    }

    public InstrumentResponseDTO findById(String id) {

        Instrument instrument = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Instrument not found"));

        return mapToDTO(instrument);
    }

    public void delete(String id) {

        repository.deleteById(id);
    }

    private InstrumentResponseDTO mapToDTO(
            Instrument instrument) {

        return new InstrumentResponseDTO(
                instrument.getId(),
                instrument.getName(),
                instrument.getType(),
                instrument.getBrand()
        );
    }
}