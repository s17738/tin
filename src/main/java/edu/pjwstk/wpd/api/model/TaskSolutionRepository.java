package edu.pjwstk.wpd.api.model;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskSolutionRepository extends JpaRepository<TaskSolution, TaskSolutionId> {

    @Override
    @EntityGraph(attributePaths = {"id.user", "id.task", "id.user.role"})
    List<TaskSolution> findAll();
}
