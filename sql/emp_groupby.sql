select * from Emp order by id desc limit 0, 10;
select * from Emp order by id desc limit 10, 10;
select * from Emp order by id desc limit 20, 10;

select * from Emp order by id desc limit 250, 10;
-- select * from Emp order by id desc limit (page - 1) * 10,10;

select floor(count(*) / 10), count(*) % 10 from Emp;

select * from Emp;
select max(salary) from Emp;
select dept, max(salary) from Emp group by dept;
select * from Emp where salary = (select max(salary) from Emp);
  
select (select max(dname) from Dept where id = Emp.dept) dept_name,
    dept, count(*), sum(salary) totsal, avg(salary) avgsal 
  from Emp group by dept;
  
-- 부서 별 급여 평균이 전체 평균보다 높은 부서의 id와 평균 급여
-- 1) from 절에 sub-query
select *  
  from (select dept, avg(salary) avgsal from Emp group by dept) s
 where avgsal > (select avg(salary) from Emp);
 
-- 2) having
select dept, avg(salary) avgsal from Emp
 group by dept having avgsal > (select avg(salary) from Emp);
 
-- 위 쿼리 결과에서 부서명 함께 출력
-- 1) sub-query 방식
select (select dname from Dept where id = Emp.dept) dept_name,
       dept, avg(salary) avgsal from Emp
 group by dept having avgsal > (select avg(salary) from Emp);

-- 2) join 방식
select e.dept, avg(e.salary) avgsal, d.dname
  from Emp e inner join Dept d on e.dept = d.id
 group by e.dept having avgsal > (select avg(salary) from Emp);

select e.*, d.id deptId, d.dname
  from Emp e inner join Dept d on e.dept = d.id; 
  
select * from Emp;

select * from Emp
-- update Emp set dept = 100
 where id = 3;

-- ex. 43)
update Emp set salary = 901 + dept where id in (152, 97,18,80,133,47,128);
select * from Emp where id in (152, 97,18,80,133,47,128) order by dept;

-- 1) 평균 급여보다 높은 급여자 (부서id, 부서명, 직원id, 직원명, 급여)
select e.dept, d.dname, e.id, e.ename, e.salary
  from Emp e inner join Dept d on e.dept = d.id
 where e.salary > (select avg(salary) from Emp);
 
-- 2) 부서 별 최고 급여자
select e.dept, DeptMaxSal.dname, e.id, e.ename, e.salary
  from Emp e
    inner join
      (select d.dname, e.dept, max(salary) maxsal
         from Emp e inner join Dept d on e.dept = d.id
        group by dept) DeptMaxSal
    on e.dept = DeptMaxSal.dept and e.salary = DeptMaxSal.maxsal
 order by e.dept;

-- no
select e.dept, max(d.dname), max(e.id), min(e.ename), max(e.salary)
  from emp e join dept d on e.dept = d.id
 where (e.dept, e.salary) in (select dept, max(salary) as maxSalary
                                from emp group by dept)
 group by dept, salary
 order by dept;
 
select * from Emp where salary >=900 order by dept;

-- woo
select d.id dept, d.dname, e.id, e.ename, auth, salary
  from Emp e join Dept d on d.id = e.dept
 where salary in (select max(salary) from emp e group by e.dept)
 order by d.id asc;

-- jung
SELECT deptId as dept, d.dname, max.id AS id, ename, max.salary
  FROM Dept d
  JOIN (SELECT deptId,id,ename,sub.salary
          FROM Emp e
			JOIN (SELECT dept AS deptId, MAX(salary) AS salary
			        FROM Emp
			       GROUP BY dept) sub
			  ON e.salary = sub.salary ) AS max
ON d.id = max.deptId
ORDER BY deptId ASC;

SELECT deptId,id,ename,sub.salary, (select dname from Dept where id = e.dept) dept_name
          FROM Emp e
			JOIN (SELECT dept AS deptId, MAX(salary) AS salary
			        FROM Emp
			       GROUP BY dept) sub
			  ON e.salary = sub.salary;
-- moon
select e.dept, yoyo.dname,e.id, e.ename, e.salary
  from Emp e 
  join 
       (select d.dname,dept, MAX(salary) as salary
          from Emp e join Dept d on e.dept = d.id group by dept) as yoyo
    on e.dept = yoyo.dept AND e.salary = yoyo.salary
 order by e.dept;

select * from Emp where dept = 1 order by ename;
update Emp set ename='김바순' where id = 207;

-- Dept 테이블에 이름이 가장 빠른 직원(가나다 순)을 captain으로 update
select dept, min(ename) from Emp group by dept;

select dept, min(ename) minName, max(ename) maxName, 
    sum(salary) totsal, avg(salary) avgsal
  from Emp group by dept;
  
select * from v_emp_groupby_dept;

select * from Emp
 where ename = ANY(select min(ename) from Emp group by dept)
 order by dept;
 
select e1.dept, e1.id
  from Emp e1 left outer join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
 where e2.id is null order by e1.dept;

start transaction;

select * from Dept d
-- update Dept d 
    inner join (select e1.dept, e1.id, e1.ename
  from Emp e1 left outer join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
 where e2.id is null) sub
    on d.id = sub.dept
  -- set d.captain = sub.id
  ;