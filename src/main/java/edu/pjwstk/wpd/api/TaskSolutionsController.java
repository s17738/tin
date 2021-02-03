package edu.pjwstk.wpd.api;

import edu.pjwstk.wpd.api.dto.TaskSolutionDto;
import edu.pjwstk.wpd.api.dto.TaskSolutionMapper;
import edu.pjwstk.wpd.api.dto.TaskSolveDto;
import edu.pjwstk.wpd.api.model.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.time.Clock;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks/{taskId}/solutions")
class TaskSolutionsController {

    private final TaskRepository taskRepository;
    private final TaskSolutionRepository taskSolutionRepository;
    private final TaskSolutionMapper taskSolutionMapper;
    private final UserRepository userRepository;


    @GetMapping()
    public List<TaskSolutionDto> getSolution(@PathVariable UUID taskId) {
        Task task = getTask(taskId);
        return taskSolutionMapper.mapToDto(
                taskSolutionRepository.findAllByTask(task)
        );
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskSolutionDto createSolution(@PathVariable UUID taskId, @Valid @RequestBody TaskSolveDto taskSolveDto) {
        Task task = getTask(taskId);
        TaskSolution taskSolution = taskSolutionRepository.save(new TaskSolution(
                UUID.randomUUID(), getTempUser(), task, taskSolveDto.getAnswer(), Instant.now(Clock.systemUTC()), null)
        );

        return taskSolutionMapper.mapToDto(taskSolution);
    }

    private User getTempUser() {
        //todo replace with session user
        return userRepository.findAll().stream().findFirst().get();
    }

    @DeleteMapping("/{solutionId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteSolution(@PathVariable UUID taskId, @PathVariable UUID solutionId) {
        getTask(taskId);
        TaskSolution taskSolution = taskSolutionRepository.findById(solutionId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Solution not found"));
        if (taskSolution.getScore() != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cannot delete solution with score");
        }
        taskSolutionRepository.deleteById(solutionId);
    }

    private Task getTask(UUID taskId) {
        return taskRepository.findById(taskId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found"));
    }
}
