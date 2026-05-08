package com.moises.musicstudy.music_study_manager.training.repository;

import com.moises.musicstudy.music_study_manager.training.entity.TrainingSession;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingRepository
        extends MongoRepository<TrainingSession, String> {

    List<TrainingSession> findByUserId(String userId);

    List<TrainingSession> findByCategory(String category);

    List<TrainingSession> findByInstrumentId(String instrumentId);
}