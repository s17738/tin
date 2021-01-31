package edu.pjwstk.wpd.api;

import edu.pjwstk.wpd.api.dto.TaskSolutionDto;
import edu.pjwstk.wpd.api.dto.TaskSolutionMapper;
import edu.pjwstk.wpd.api.model.Task;
import edu.pjwstk.wpd.api.model.TaskRepository;
import edu.pjwstk.wpd.api.model.TaskSolution;
import edu.pjwstk.wpd.api.model.TaskSolutionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks/{taskId}/solutions")
class TaskSolutionsController {

    private final TaskRepository taskRepository;
    private final TaskSolutionRepository taskSolutionRepository;
    private final TaskSolutionMapper taskSolutionMapper;


    @GetMapping()
    public List<TaskSolutionDto> getTask(@PathVariable UUID taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));
        return taskSolutionMapper.mapToDto(
                taskSolutionRepository.findAllByTask(task)
        );
    }
}
