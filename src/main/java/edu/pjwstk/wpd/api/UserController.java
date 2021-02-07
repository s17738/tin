package edu.pjwstk.wpd.api;

import edu.pjwstk.wpd.api.dto.LoginDto;
import edu.pjwstk.wpd.api.dto.UserDto;
import edu.pjwstk.wpd.api.dto.UserMapper;
import edu.pjwstk.wpd.api.dto.UserWithPasswordDto;
import edu.pjwstk.wpd.api.model.User;
import edu.pjwstk.wpd.api.model.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
class UserController {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    @GetMapping
    public List<UserDto> getUsers() {
        return userMapper.mapToDto(userRepository.findAll());
    }

    @GetMapping("/{userId}")
    public UserDto getUser(@PathVariable UUID userId) {
        return userMapper.mapToDto(userRepository.findAggregateById(userId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found")));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public UserDto createUser(@Valid @RequestBody UserWithPasswordDto userDto) {
        User user = userMapper.mapToEntity(userDto);
        user.setId(UUID.randomUUID());
        return userMapper.mapToDto(userRepository.save(user));
    }

    @PutMapping("/{userId}")
    public UUID updateUser(@PathVariable UUID userId, @Valid @RequestBody UserWithPasswordDto userDto) {
        if (!userRepository.existsById(userId)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
        User user = userMapper.mapToEntity(userDto);
        user.setId(userId);
        userRepository.save(user);
        return user.getId();
    }

    @DeleteMapping("/{userId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable UUID userId) {
        userRepository.deleteById(userId);
    }

    @PostMapping("/login")
    public UserDto createUser(@Valid @RequestBody LoginDto loginDto) {
        User user = userRepository.findAggregateByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        return userMapper.mapToDto(user);
    }
}
