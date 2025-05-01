CREATE DEFINER=`tester`@`%` PROCEDURE `sp_deptinfo`(_dept_name varchar(31))
BEGIN
    select d.id, d.dname, ifnull(e.ename, '공석') captainName,
        (select format(avg(salary) * 10000, 0)
           from Emp where dept = d.id) avgsal
      from Dept d left outer join Emp e
        on d.id = e.dept and d.captain = e.id
     where d.dname like concat(_dept_name, '%');
END