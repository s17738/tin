package edu.pjwstk.wpd.api.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import java.util.UUID;

import static lombok.AccessLevel.PACKAGE;

@Getter
@Setter
@Entity
@Table(name = "roles")
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor(access = PACKAGE)
@AllArgsConstructor
public class Role {

    @Id
    @EqualsAndHashCode.Include
    private UUID id;

    private String name;
}
