package com.moises.musicstudy.music_study_manager.repertorie.repository;

import com.moises.musicstudy.music_study_manager.repertorie.entity.Repertoire;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepertoireRepository
        extends MongoRepository<Repertoire, String> {

    List<Repertoire> findByUserId(String userId);

    List<Repertoire> findByStatus(String status);

    List<Repertoire> findByArtist(String artist);

    List<Repertoire> findByMusicNameContainingIgnoreCase(
            String musicName
    );
}