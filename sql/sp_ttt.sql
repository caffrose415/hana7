CREATE DEFINER=`tester`@`%` PROCEDURE `sp_ttt`(IN _initValue int, OUT _retValue int)
BEGIN
    declare v_i int default _initValue;
    
    while (v_i < 10) do
        set v_i = v_i + 1;
    end while;
    
    set _retValue = v_i;
END