const squre=require("./square.js")
const cal=(a)=>{
    console.log(`the value of a is ${a} and the area is`+squre.area(a));
    console.log(`the value of a is ${a} and the area is`+squre.parameter(a));

}
cal(5)