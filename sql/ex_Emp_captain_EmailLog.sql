desc Emp;
desc Dept;

alter table Dept add column captain int unsigned null comment '부서장';

alter table Dept add constraint foreign key (captain) references Emp(id)
  on Delete set null on Update cascade;
  
show create table Dept;

select * from Dept;

alter table Dept drop constraint dept_ibfk_1;

create table EmailLog (
  id int unsigned not null auto_increment primary key,
  sender int unsigned not null comment '발신자',
  receiver varchar(1024) not null comment '수신자',
  subject varchar(255) not null default '' comment '제목',
  body text null comment '내용',
  foreign key fk_EmailLog_sender_Emp (sender)
    references Emp(id) on update cascade on delete no action
) ENGINE = MyIsam;

select * from Emp;

select e.dept, avg(salary) avgsal from Emp e
 group by dept having avgsal > (select avg(salary) from Emp);
 
select dept, max(ename), max(salary) from Emp group by dept;
select * from Emp where salary = 901 order by dept, id;
select * from Dept;

select * from Emp where id in (3,5,14,26);
select e1.*, e2.id
  from Emp e1 left join Emp e2 on e1.dept = e2.dept and e1.ename > e2.ename
 where e2.id is null order by e1.dept;

select * from Emp where ename = SOME(select min(ename) from Emp group by dept)
 order by dept;
 
select * from Emp where salary > SOME(select min(ename) from Emp group by dept)
 order by dept;

select e1.*, e2.id
  from Emp e1 left join Emp e2 on e1.dept = e2.dept and e1.salary >= e2.salary
 where e2.id is null order by e1.dept;

select e1.dept, e2.dname, e1.id, e1.ename, e1.salary
  from Emp e1 join (select dept, d.dname, max(salary) salary from Emp e inner join Dept d on e.dept = d.id group by dept) e2
    on e1.dept = e2.dept and e1.salary = e2.salary
 order by e1.dept;
    
select * from Dept;



select e1.*, e2.id, e2.ename
  from Emp e1 left join Emp e2 on e1.dept = e2.dept and e1.salary < e2.salary
 where e2.id is null
       order by e1.dept;
       
       