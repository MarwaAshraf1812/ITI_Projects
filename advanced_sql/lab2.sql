-- Q1 Insert a new faculty called 'Faculty of Law' with dean = 'Dr. Hany Aziz', building = 'G',
-- budget = 8,000,000. Return the new faculty_id immediately.
insert into faculties (faculty_name, dean, building, budget)
values ('Faculty of Law', 'Dr. Hany Aziz', 'G', 8000000)
returning faculty_id;

-- Q2 Give all professors in department 3 a 15% salary raise. Return each professor's
-- name, old salary, and new salary.
update professors
set salary  = salary * 1.15
where dept_id = 3
returning  first_name, last_name, salary / 1.15 as old_salary, salary as new_salary;

-- Q3 Update all students whose GPA is below 2.0 and who enrolled before 2022 — set
-- is_active to FALSE. Return their names.

update students
set is_active  = 'False'
where gpa < 2.0
and enroll_date < '2022-01-01'
returning  first_name, last_name;

-- Q4 Enroll student_id 5 (Khaled) in course_id 1 (CS101) for Fall 2023. If the enrollment
-- already exists, do nothing.
insert into enrollments (student_id, course_id, semester)
values (5, 1, 'Fall 2023')
on conflict  (student_id, course_id, semester)
do nothing;

-- Q5 Update the grade of student_id 1 in course_id 3 for Fall 2022 to 98, and set
-- letter_grade to 'A+'.
update enrollments
set grade = 98,
letter_grade = 'A+'
where student_id = 1
and course_id = 3
and  semester   = 'Fall 2022';


-- Q6 Use MERGE (PG 15+): if student_id=99 exists, update their address; if not, insert
-- them as a new student.
merge into students as target
using (select 99 as student_id) as source
on target.student_id = source.student_id
when matched then
    update set address = 'New Address'
when not matched then
    insert (student_id, first_name, last_name)
    values (99, 'New', 'Student');
	
-- Q7 Create a new table called high_gpa_students containing only students with GPA >=
-- 3.5, using SELECT INTO
select *
into high_gpa
from students
where gpa >=3.5;
select * from high_gpa;


-- Q8 Create a table dept_summary containing: dept_name, student count, average GPA,
-- and total scholarship amount per department — using CREATE TABLE AS.

create table dept_summary as
select 
	d.dept_name,
    count(s.student_id)        as student_count,
    round(avg(s.gpa), 2)       as avg_gpa,
    coalesce(sum(sc.amount), 0) as total_scholarships
from departments d
left join students s on d.dept_id = s.dept_id
left join scholarships sc on s.student_id = sc.student_id  -- need to update
group by d.dept_name;


-- Q9 Make two copies of the enrollments table: one with structure only (no data), and
-- another with structure + data + all constraints.

create table enrolls_stru_only
as select * from enrollments where 1=0


create table enrolls_full
(like enrollments including all)

insert into enrolls_full
select * from enrollments;



-- Q10 Create a table exam_results with various DEFAULT values: status='pending',
-- score=0, exam_date=CURRENT_DATE, created_by=CURRENT_USER. Insert two rows —
-- one using all defaults, one overriding them.
create table exam_results (
  id SERIAL PRIMARY KEY,
  status TEXT default 'pending',
  score INT default 0,
  exam_date DATE default CURRENT_DATE,
  created_by TEXT default CURRENT_USER
)

insert into exam_results default values;

insert into exam_results (score)
values (85);


-- Q11 Show all students who have metadata stored. Display: their first hobby, the
-- number of languages they speak, and whether they have a laptop.
select 
  metadata->>'hobby' as hobby,
  jsonb_array_length(metadata->'languages') as num_languages,
  (metadata->>'has_laptop')::boolean as has_laptop
from students;

-- Q12 Create an ENUM type called student_level with values: Freshman, Sophomore,
-- Junior, Senior. Add it as a column on students and update it based on GPA ranges.
create type student_level as enum 
('Freshman', 'Sophomore', 'Junior', 'Senior');

alter table students
add column level  student_level;

update students
set level = 
  case 
    when gpa >= 3.5 then 'Senior'
    when gpa >= 3 then 'Junior'
    when gpa >= 2.5 then 'Sophomore'
    when 'Freshman'
	END;

-- Q13 Create a Composite Type called contact_info with fields (phone TEXT, email TEXT,
-- city TEXT). Use it in a student_contacts table.
create type contact_info as (
  phone TEXT,
  email TEXT,
  city TEXT
);

create table student_contacts (
  student_id INT,
  contact contact_info
);