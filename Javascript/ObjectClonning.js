
 //spread operator
 let obj={age:12};
 let dobj={...obj};
 console.log(dobj);
 obj.age=45;
 console.log(obj.age==dobj.age,obj.age,dobj.age);

 //using object assign
  let src={
    age:12,
    wt:68,
    ht:180
 };
//  let dest=Object.assign({},src);
//  console.log(dest);

 let src2={value:101, name:"LoveBabbar"};
 let dest=Object.assign({},src,src2); // clone one or more object in one object
console.log(dest);

//clonning through iteration
let s={age:12,wt:68,ht:180};
let d={};
for(let key in s){
    let newkey=key;
    let newvalue=s[key];
    d[newkey]=newvalue;
}
s.wt=100;
console.log(s);
console.log(d);
