package edu.pjwstk.wpd.api.dto;

import edu.pjwstk.wpd.BaseMapperConfig;
import edu.pjwstk.wpd.api.model.Task;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(config = BaseMapperConfig.class)
public interface TaskMapper {

    TaskDto mapToDto(Task task);

    Task mapToEntity(TaskDto taskDto);

    List<TaskDto> mapToDto(List<Task> tasks);
}
