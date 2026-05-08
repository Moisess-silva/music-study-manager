package com.moises.musicstudy.music_study_manager.users.entity;

import com.moises.musicstudy.music_study_manager.users.enums.UserLevel;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    private String id;

    private String username;

    private String email;

    private String password;

    private UserLevel level;

    private Integer weeklyGoal;

    private List<String> roles;
}