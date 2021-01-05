drop table if exists task_solutions cascade;
drop table if exists tasks cascade;
drop table if exists users cascade;
drop table if exists roles cascade;

create table tasks
(
    id          uuid primary key,
    name        varchar(255) not null,
    description text,
    start_date  timestamp    not null,
    end_date    timestamp    not null
);

create table users
(
    id         uuid primary key,
    first_name varchar(255) not null,
    last_name  varchar(255) not null,
    email      varchar(255) not null,
    password   varchar(255) not null,
    role_id    uuid         not null
);

create table task_solutions
(
    id          uuid primary key,
    id_user     uuid      not null,
    id_task     uuid      not null,
    answer      text      not null,
    solved_date timestamp not null,
    score       integer   null
);

create table roles
(
    id   uuid primary key,
    name varchar(255) not null
);

create unique index roles_u_index on roles (name);

alter table task_solutions
    add constraint fk_id_user
        foreign key (id_user) references users;

alter table task_solutions
    add constraint fk_id_task
        foreign key (id_task) references tasks;

alter table users
    add constraint fk_role_id
        foreign key (role_id) references roles;