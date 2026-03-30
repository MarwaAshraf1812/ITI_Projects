-- Create schema
CREATE SCHEMA archive;

-- Create a table inside it
CREATE TABLE archive.old_std (
 std_id INT,
 full_name VARCHAR(100),
 archived_at DATE
)

-- Drop everything inside the schema (table first, then schema)
DROP TABLE archive.old_std;
DROP SCHEMA archive;

-- Q2 — Active female students enrolled after 2021-01-01
select *
from students
where gender = 'Female'
and is_active = 'true'
and enroll_date > ' 2021-01-01'

-- Q3 — Active professors whose first name starts with 'S' or 'K'
select *
from professors
where (first_name like 'S%' or first_name like 'K%')
and is_active = 'true';

-- Q4 — Students with no phone number on record
select *
from students
where phone is null;

-- Q5 — Top 5 highest-paid + Bottom 5 lowest-paid professors
(select first_name, salary
from professors order by salary desc limit 5)
union all
(select first_name, salary
from professors order by salary asc limit 5)

-- Q6 List courses whose name contains the word 'Systems' or 'Analysis' (case-insensitive).
select *
from courses
where course_name ilike  '%Systems%'
or course_name ilike  '%Analysis%';

-- Q7 Find all students NOT in departments 1, 3, or 5, who have a GPA above 3.0.
select *
from students
where dept_id not in (1, 3, 5)
and gpa > 3.0;

--Q8 Show each department NAME with: number of students, average GPA, min GPA, max GPA. Include departments with 0 students.
select
    d.dept_name,
    COUNT(s.student_id)   AS num_students,
    ROUND(AVG(s.gpa), 2)  AS avg_gpa,
    MIN(s.gpa)            AS min_gpa,
    MAX(s.gpa)            AS max_gpa

from departments d
left join students s on d.dept_id = s.dept_id
group by d.dept_id, d.dept_name

-- Q9 What is the total salary budget per faculty (by joining departments and professors)?
select f.faculty_name, SUM(p.salary) as total_budget
from faculties f
join departments d on f.faculty_id  = d.faculty_id
join       professors  p on d.dept_id = p.dept_id
group by   f.faculty_id, f.faculty_name;


-- Q10 Show each professor and the name of their manager. Professors with no manager should still appear.
select
p.first_name as professor,
m.first_name as manager
from professors p
left join professors m on p.manager_id = m.prof_id;

-- Q11  Find students enrolled in departments that are located in 'Cairo'.
select s.*
from   students    s
join   departments d on s.dept_id = d.dept_id
where  d.location = 'Cairo';

-- Q12 Update the grade of student_id 1 in course_id 3 for Fall 2022 to 98, and set letter_grade to 'A+'.
update enrollments
set grade = 98,
	letter_grade = 'A+'
where student_id = 1
and course_id = 3
and semester   = 'Fall 2022';


-- Q13 Add a new column 'phone_verified' (BOOLEAN DEFAULT FALSE) to the students table.
alter table students
add column phone_verified boolean default false;

select phone_verified from students;

-- Q14 Add a CHECK constraint to the professors table that salary must be between 5,000 and 100,000.
alter table professors
add constraint chk_salary_range
check (salary between 5000 and 100000);

-- Q15 Rename the column 'phone_verified' to 'is_phone_verified', then drop it.

alter table students
rename column phone_verified to is_phone_verified;

alter table students
drop column is_phone_verified;