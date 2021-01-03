package edu.pjwstk.wpd.api.model;

import lombok.Data;

import javax.persistence.Embeddable;
import javax.persistence.ManyToOne;
import java.io.Serializable;

@Data
@Embeddable
public class TaskSolutionId implements Serializable {

    @ManyToOne
    private User user;

    @ManyToOne
    private Task task;
}

