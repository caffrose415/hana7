set global innodb_ft_aux_table = 'testdb/Notice';
SET GLOBAL innodb_optimize_fulltext_only = ON;
OPTIMIZE TABLE testdb.Notice;
SET GLOBAL innodb_optimize_fulltext_only = OFF;

select * from information_schema.innodb_ft_index_table;

select * from information_schema.innodb_ft_index_table
 where word like '%조선%';