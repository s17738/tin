package edu.pjwstk.wpd.api.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.util.UUID;

import static lombok.AccessLevel.PACKAGE;

@Getter
@Setter
@Entity
@Table(name = "users")
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor(access = PACKAGE)
@AllArgsConstructor
public class User {

    @Id
    @ToString.Include
    @EqualsAndHashCode.Include
    private UUID id;

    @ToString.Include
    private String firstName;

    @ToString.Include
    private String lastName;

    private String email;

    private String password;

    @ManyToOne
    private Role role;
}

