-- Q1 Show the difference between RANK and DENSE_RANK on professor salaries — observe the gap
-- behavior when salaries are tied.
select first_name, salary,
	rank() over(order by salary desc) as rank_gap,
	dense_rank() over(order by salary desc) as dense_rank_no_gap
from professors;

-- Q2 For each student, show the GPA of the student enrolled immediately before and after them using
-- LAG and LEAD, ordered by enroll_date.

select first_name, enroll_date, gpa,
	lag(gpa) over(order by gpa desc) as prev_gpa,
	lead(gpa) over(order by gpa desc) as next_gpa
from students;

-- Q3 Calculate a running total of scholarship amounts ordered by start_date.
select amount, start_date,
	sum(amount) over(order by start_date) as available_total
from scholarships;

-- Q4 Divide all students into 4 GPA quartiles ,Add a label for each quartile.
select first_name, gpa,
	ntile(4) over(order by gpa desc) as gpa_group
from students;

-- Q5 Show the first 3 characters of each course_code, and find the position of the first digit in it.
select course_code,
	substring(course_code, 1, 3) as short_code,
	position(substring(course_code from '[0-9]') in course_code) as first_position
from courses;

-- Q6 Create a function get_dept_student_count(dept_id) that returns the number of students in that
-- department.
create or replace function get_dept_student_count(n_dept_id int)
returns int
language plpgsql
as $$
declare 
	total_students int;
begin
	select count(*) into total_students from students
	where dept_id = n_dept_id;
	return total_students;
end;
$$

select get_dept_student_count(1);


-- Q7 Create a function give_gpa_bonus(dept_id, bonus_percent) that returns a table of: student
-- name, old_gpa, new_gpa — without actually updating any rows.
create or replace function give_gpa_bonus(n_dept_id int, bonus_percent numeric)
returns table(student_name text, old_gpa numeric, new_gpa numeric)
language plpgsql
as $$ 
	
begin
	return query
	select  (s.first_name || ' ' || s.last_name)::text,
	s.gpa, 
	(s.gpa * (1 + bonus_percent / 100))::numeric
	from students s
	where s.dept_id = n_dept_id;
end;
$$

SELECT * FROM give_gpa_bonus(1, 10);



-- Q8 Create a stored procedure transfer_student(student_id, new_dept_id) that moves a student to a
-- new department and confirms with RAISE NOTICE
create or replace procedure transfer_student(n_student_id int, new_dept_id int)
language plpgsql
as $$ 
	
begin
	update students
	set dept_id = new_dept_id
	where student_id = n_student_id;

	raise notice 'Student % has been moved to department %', n_student_id, new_dept_id;
end;
$$

call transfer_student(1, 3);



