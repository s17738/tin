package edu.pjwstk.wpd.api.dto;

import lombok.Builder;
import lombok.Value;

import javax.validation.constraints.NotBlank;
import java.util.UUID;

@Value
@Builder
public class RoleDto {

    @NotBlank
    UUID id;

    @NotBlank
    String name;
}
