package edu.pjwstk.wpd.api.model;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TaskSolutionRepository extends JpaRepository<TaskSolution, UUID> {

    @Override
    @EntityGraph(attributePaths = {"user", "user.role", "task"})
    List<TaskSolution> findAll();
}
