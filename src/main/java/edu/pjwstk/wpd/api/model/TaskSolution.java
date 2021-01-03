package edu.pjwstk.wpd.api.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.lang.Nullable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import java.time.Instant;

import static lombok.AccessLevel.PACKAGE;

@Getter
@Setter
@Entity
@Table(name = "task_solutions")
@ToString(callSuper = true, onlyExplicitlyIncluded = true)
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@NoArgsConstructor(access = PACKAGE)
@AllArgsConstructor
public class TaskSolution {

    @EmbeddedId
    @ToString.Include
    @EqualsAndHashCode.Include
    private TaskSolutionId id;

    private String answer;

    private Instant solvedDate;

    @Nullable
    private Integer score;
}

