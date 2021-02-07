package edu.pjwstk.wpd.api.model;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    @EntityGraph(attributePaths = {"role"})
    @Override
    List<User> findAll();

    @EntityGraph(attributePaths = {"role"})
    Optional<User> findAggregateById(UUID id);

    @EntityGraph(attributePaths = {"role"})
    List<User> findAllByRole(Role role);

    @EntityGraph(attributePaths = {"role"})
    Optional<User> findAggregateByEmailAndPassword(String email, String password);
}
