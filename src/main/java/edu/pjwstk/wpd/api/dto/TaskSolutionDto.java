package edu.pjwstk.wpd.api.dto;

import lombok.Builder;
import lombok.Value;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.util.UUID;

@Value
@Builder
public class TaskSolutionDto {

    UUID id;

    @NotBlank
    String answer;

    @NotNull
    Instant solvedDate;

    Integer score;
}
