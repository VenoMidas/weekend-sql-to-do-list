-- database table
CREATE TABLE "tasks" (
    "id" serial PRIMARY KEY,
    "task" varchar(56) NOT NULL,
    "details" varchar(215),
    "priority" varchar(6), -- dropdown list low/medium/high values
    "completed" varchar(5) DEFAULT 'false', -- true/false
    "created" varchar(25) DEFAULT '',
    "updated" varchar(25) DEFAULT '',
    "finished" varchar(25) DEFAULT ''
);

-- some lorem ipsum tasks to insert to get started

INSERT INTO "tasks" ("task", "details", "priority", "created")
VALUES ('Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.', 'low', '8/12/2022 @ 8:47'),
('Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.', 'medium', '8/12/2022 @ 8:48'),
('Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error veniam sit expedita est illo maiores neque quos nesciunt, reprehenderit autem odio commodi labore praesentium voluptate repellat in id quisquam.', 'high', '8/12/2022 @ 8:49');