package edu.pjwstk.wpd.api.dto;

import lombok.Builder;
import lombok.Value;

import javax.validation.constraints.NotBlank;

@Value
@Builder
public class LoginDto {

    @NotBlank
    String email;

    @NotBlank
    String password;
}