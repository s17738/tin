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

import java.time.Instant;
import java.util.UUID;

import static lombok.AccessLevel.PACKAGE;

@Getter
@Setter
@Entity
@Table(name = "tasks")
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor(access = PACKAGE)
@AllArgsConstructor
public class Task {

    @Id
    @ToString.Include
    @EqualsAndHashCode.Include
    private UUID id;

    @ToString.Include
    private String name;

    private String description;

    private Instant startDate;

    private Instant endDate;

}
