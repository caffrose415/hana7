CREATE DEFINER=`tester`@`%` PROCEDURE `sp_emplist`(_id int unsigned)
BEGIN
    select * from Emp where id < ifnull(_id, 0);
END