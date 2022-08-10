-- database table
CREATE TABLE "tasks" (
    "id" serial PRIMARY KEY,
    "task" varchar(56) NOT NULL,
    "details" varchar(215),
    "priority" varchar(6), -- dropdown list low/medium/high values
    "completed" varchar(5) -- true/false
);

-- some lorem ipsum tasks to insert to get started

INSERT INTO "tasks" ("task", "details", "priority")
VALUES ('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.', 'low'),
('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.', 'medium'),
('Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.', 'high');