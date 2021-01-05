package edu.pjwstk.wpd.api;

import edu.pjwstk.wpd.api.model.TaskSolution;
import edu.pjwstk.wpd.api.model.TaskSolutionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks-solutions")
class TaskSolutionsController {

    private final TaskSolutionRepository taskSolutionRepository;

    @GetMapping
    public List<TaskSolution> getTaskSolutions() {
        return taskSolutionRepository.findAll();
    }
}
