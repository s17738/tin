package edu.pjwstk.wpd.api.dto;

import lombok.Builder;
import lombok.Value;

import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.util.UUID;

@Value
@Builder
public class TaskDto {

    UUID id;

    @NotBlank
    String name;

    @NotBlank
    String description;

    @NotNull
    @FutureOrPresent
    Instant startDate;

    @NotNull
    @FutureOrPresent
    Instant endDate;
}
