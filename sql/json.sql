alter table Emp add column remark json;
alter table Emp add column remark2 json;
alter table emp drop column remark2;

update Emp set remark = '{"id": 1, "age": 30, "fam": [{"id": 1, "name": "유세차"}]}',
               remark2 = '{"id": 1, "age": 30, "fam": [{"id": 1, "name": "유세차"}]}'
 where id = 2;

select * from Emp where id<=5;

select remark -> '$.age', remark2 -> '$.age', remark ->> '$.fam[0].name', remark2 ->'$.fam[0].name',
  json_valid(remark),json_valid(remark2)
  from Emp where id = 2;
  
update Emp set remark = '{"id": 3, "age": 33, "fam": [{"id": 1, "name": "유세차"}, {"id":2, "name": "홍길숭"}]}'
 where id = 3;

update Emp set remark = '{"id": 4, "age": 34, "fam": [{"id": 1, "name": "유세차"}]}'
 where id = 4;
 
update Emp set remark = json_object( 'id', 5, 'age', 44, 
                          'fam', json_array(
                              json_object('id', 1, 'name', '지세차'),
                              json_object('id', 2, 'name', '지세창')   )  )
 where id = 5;

select  json_pretty(remark) from Emp where id <= 5;


select id, ename, remark->'$.age', remark->'$.fam' as family,
    json_unquote(remark->'$.fam[0].name'), remark->'$.fam[0 to 2]', remark->'$.fam[last - 1 to last].name',
    remark->>'$.fam[0].name',  remark->>'$.fam[last].name',  remark->>'$.fam[last - 1].name'
  from Emp where json_object('id', 1, 'name', '유세차') member of (remark->'$.fam');


select JSON_EXTRACT(remark, "$.id"), remark ->>'$.id',   -- remark->'$.k'
JSON_UNQUOTE(JSON_EXTRACT(remark, "$.fam[0].name")), remark ->>'$.id',   -- remark->>'$.k'
JSON_EXTRACT(remark, "$.id")
from emp where id<=5;


alter table Emp add index index_Emp_remark_fam ((
  cast(remark->>'$.fam[*].name' as char(255) array)
));

explain select * from emp where '유세차' member of (remark->> '$.fam[*].name');

update emp set remark = json_object('id',1,'age',55,'name','Hong')
where id = 2;

update emp set remark = json_insert(remark,'$.addr','seoul')
where id = 2;

update emp set remark = json_insert(remark,'$.fam',json_array(json_object('id',1,'name','유세홍')))
where id = 2;

update emp set remark = json_array_append(remark,'$.fam',json_object('id',2,'name','유세이'))
where id = 2;

update emp set remark = json_set(remark,'$.fam[1].name','새로이')
where id = 2;

update emp set remark = json_remove(remark,'$.addr') where id = 2;


select* from Emp where id = 2;
select remark from emp where remark -> '$.fam[1].name'= '새로이';

select e.*,d.dname
  from emp e join dept d on e.remark -> '$.fam[0].id'= d.id
  where json_length(e.remark -> '$.fam') >0;


select json_objectagg(dname,id) from dept;

select json_storage_size(remark) from emp;
