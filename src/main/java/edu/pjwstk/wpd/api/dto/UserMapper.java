package edu.pjwstk.wpd.api.dto;

import edu.pjwstk.wpd.BaseMapperConfig;
import edu.pjwstk.wpd.api.model.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(config = BaseMapperConfig.class)
public interface UserMapper {

    UserDto mapToDto(User user);

    User mapToEntity(UserWithPasswordDto userDto);

    List<UserDto> mapToDto(List<User> users);
}
