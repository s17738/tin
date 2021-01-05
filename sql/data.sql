insert into roles (id, name)
values ('eefcb68d-1244-4361-ae17-3db58fc5770f', 'nauczyciel'),
       ('38157c0d-18b3-44c4-8492-efe01e90838e', 'student');

insert into tasks (id, name, description, start_date, end_date)
values ('0969990d-44fd-4b5e-836c-548998115180', 'Zadanie 1', 'opis zadania', current_timestamp, current_timestamp + interval '1 day'),
       ('a5b5e70c-cd37-40a9-a5b8-ca52e52ba3fa', 'Zadanie 2', 'opis zadania', current_timestamp + interval '1 day', current_timestamp + interval '2 day');

insert into users (id, first_name, last_name, email, password, role_id)
values ('99859862-5419-495d-8175-ab7cf403690c', 'Adam', 'Nowak', 'a.nowak@onet.pl', 'passwd', 'eefcb68d-1244-4361-ae17-3db58fc5770f'),
       ('b2f63343-4800-458e-9c78-a07b23bb3e87', 'Anna', 'Kowalska', 'a.kowalska@onet.pl', 'passwd', '38157c0d-18b3-44c4-8492-efe01e90838e');

insert into task_solutions (id, id_user, id_task, answer, solved_date, score)
values (gen_random_uuid(), 'b2f63343-4800-458e-9c78-a07b23bb3e87', '0969990d-44fd-4b5e-836c-548998115180', '', current_timestamp + interval '1 day', null);