package edu.pjwstk.wpd.api.dto;

import lombok.Builder;
import lombok.Value;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Value
@Builder
public class UserWithPasswordDto {

    @NotBlank
    String firstName;

    @NotBlank
    String lastName;

    @NotBlank
    String password;

    @NotBlank
    @Email
    String email;

    @NotNull
    RoleDto role;
}
