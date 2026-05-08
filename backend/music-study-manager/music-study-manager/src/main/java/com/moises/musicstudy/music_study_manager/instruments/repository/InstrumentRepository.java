package com.moises.musicstudy.music_study_manager.instruments.repository;

import com.moises.musicstudy.music_study_manager.instruments.entity.Instrument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstrumentRepository
        extends MongoRepository<Instrument, String> {

    List<Instrument> findByUserId(String userId);
}