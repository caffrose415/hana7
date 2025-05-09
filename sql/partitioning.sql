create table PartiRangeTest (
  studentno varchar(7) not null,
  enteryear smallint not null,
  studentname varchar(31) not null 
)
Partition by RANGE(enteryear) (
    partition p1 values less than(2000),
    partition p2 values less than(2010),
    partition p3 values less than MAXVALUE
);

select * from partirangetest;
select * from information_schema.partitions;
select * from information_schema.partitions
 where table_name='PartiRangeTest';
explain select * from PartiRangeTest
         where enteryear = 2004;

insert into PartiRangeTest(studentno, enteryear, studentname)
  values ('8809080', 1988, '팔팔학번'),
         ('0809080', 2008, '공팔학번'),
         ('1809080', 2018, '일팔학번');
         
insert into PartiRangeTest(studentno, enteryear, studentname)
  values ('2409080', 2024, '이사학번');
  
select* from partirangetest where enteryear=2004;
update partirangetest set enteryear = 2004 where enteryear = 2024;
alter table partirangetest drop partition p2;

drop table emptest cascade;
create table emptest as select * from emp;

alter table emptest modify column id int unsigned not null auto_increment,
  add primary key(id);

alter table emptest partition by range(id)(
    partition p1 values less than(100),
    partition p2 values less than(200),
    partition p3 values less than MAXVALUE
);
alter table emptest drop partition p2;

insert into emptest(id,ename,dept,auth,salary,mobile) select 150,ename,dept,auth,salary,'010-1234-5678' from emptest where id= 2;

alter table emptest reorganize partition p3 into(
  partition p2 values less than (200),
  partition p3 values less than MAXVALUE
);
explain select * from emptest where id = 150;
select * from information_schema.partitions
 where table_name='emptest';
select * from emptest where id = 150;

rename table emp to empbackup;
rename table emptest to emp;

show create table dept;
