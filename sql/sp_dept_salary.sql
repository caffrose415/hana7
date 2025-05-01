CREATE DEFINER=`tester`@`%` PROCEDURE `sp_dept_salary`()
BEGIN
    Declare _done boolean default False;
    
    Declare _id smallint unsigned;
    Declare _dname varchar(31);
    Declare _captain int unsigned;
    
    Declare v_maxsal int;
    Declare v_ename varchar(31);
    Declare v_salary int;
    
    Declare _cur CURSOR FOR
        select id, dname, captain from Dept;
        
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        SHOW ERRORS;
        SELECT '에러발생' as 'Result';
        -- ROLLBACK;
    END;

    Declare Continue Handler
        For Not Found SET _done := True;
        
    drop table if exists $Tmp;
    create temporary table $Tmp(
        id smallint unsigned,
        dname varchar(31),
        maxsal int,
        maxcnt smallint,
        captain varchar(31),
        captainsal int
    );
    
    OPEN _cur;
        cur_loop: LOOP
            Fetch _cur into _id, _dname, _captain;
            
            IF _done THEN
                LEAVE cur_loop;
            END IF;
            
            select round(max(salary)) into v_maxsal from Emp where dept = _id;
            
            IF _captain is null THEN
                set v_ename = '';
                set v_salary = 0;
            ELSE
                select ename, salary into v_ename, v_salary
                  from Emp where id = _captain;
            END IF;
            
            insert into $Tmp
            select _id, _dname, v_maxsal, 
                (select count(*) from Emp where dept = _id and salary = v_maxsal),
                v_ename, v_salary;
            
        END LOOP cur_loop;
    CLOSE _cur;
    
    select * from $Tmp order by dname;

END