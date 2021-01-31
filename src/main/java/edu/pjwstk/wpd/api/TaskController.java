package edu.pjwstk.wpd.api;

import edu.pjwstk.wpd.api.dto.TaskDto;
import edu.pjwstk.wpd.api.dto.TaskMapper;
import edu.pjwstk.wpd.api.model.Task;
import edu.pjwstk.wpd.api.model.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/tasks")
class TaskController {

    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    @GetMapping
    public List<TaskDto> getTasks() {
        return taskMapper.mapToDto(taskRepository.findAll());
    }

    @GetMapping("/{taskId}")
    public TaskDto getTask(@PathVariable UUID taskId) {
        return taskMapper.mapToDto(taskRepository.findById(taskId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found")));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskDto createTask(@Valid @RequestBody TaskDto taskDto) {
        Task task = taskMapper.mapToEntity(taskDto);
        task.setId(UUID.randomUUID());
        return taskMapper.mapToDto(taskRepository.save(task));
    }

    @PutMapping("/{taskId}")
    public UUID updateTask(@PathVariable UUID taskId, @Valid @RequestBody TaskDto taskDto) {
        if (!taskRepository.existsById(taskId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
        }
        Task task = taskMapper.mapToEntity(taskDto);
        task.setId(taskId);
        taskRepository.save(task);
        return task.getId();
    }

    @DeleteMapping("/{taskId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable UUID taskId) {
        taskRepository.deleteById(taskId);
    }
}
