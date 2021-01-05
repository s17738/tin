package edu.pjwstk.wpd.api.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.util.Set;
import java.util.UUID;

import static javax.persistence.FetchType.LAZY;
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

    @JsonIgnore
    private String password;

    @ManyToOne(fetch = LAZY)
    private Role role;

    // @ManyToMany
    // private Set<TaskSolution> taskSolutions;

    // @ManyToMany
    // @JoinTable(
    //     name = "task_solutions",
    //     joinColumns = {
    //         @JoinColumn(name = "contentId", referencedColumnName = "id"),
    //         @JoinColumn(name = "contentType", referencedColumnName = "contentType")
    //     },
    //     inverseJoinColumns = {
    //         @JoinColumn(name = "imageId", referencedColumnName = "id")
    //     }
    // )
    // private Set<Task> tasks;
}

