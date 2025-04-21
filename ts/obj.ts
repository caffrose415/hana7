type Tuser = {id: number,name:string};

let hong:Tuser ={id:1,name:"Hong"};

hong = Object.assign({id:1},{name:"Kim"});


hong = {id:2,name:"Kim",addr:"Seoul"} as Tuser  //freshness 상태 -> 코드를 수정할 수 있는 상태
const hongx = {id:2,name:"Kim", addr:'Seoul'};

hong= hongx;

const obj = {} as Tuser;
hong = obj;