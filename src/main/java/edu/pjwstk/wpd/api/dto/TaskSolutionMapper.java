package edu.pjwstk.wpd.api.dto;

import edu.pjwstk.wpd.BaseMapperConfig;
import edu.pjwstk.wpd.api.model.TaskSolution;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(config = BaseMapperConfig.class)
public interface TaskSolutionMapper {

    TaskSolutionDto mapToDto(TaskSolution taskSolution);

    TaskSolution mapToEntity(TaskSolutionDto taskSolutionDto);

    List<TaskSolutionDto> mapToDto(List<TaskSolution> taskSolutions);
}
