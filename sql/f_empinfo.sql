CREATE DEFINER=`tester`@`%` FUNCTION `f_empinfo`(_id int unsigned) RETURNS varchar(64) CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci
BEGIN
    declare v_ret varchar(64) default '미등록 직원';
    
    select concat(e.ename, '(', ifnull(d.dname, '발령대기'), ')') into v_ret
      from Emp e left outer join Dept d on e.dept = d.id
     where e.id = _id;
     
RETURN v_ret;
END