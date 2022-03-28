// First way

exports.area=(a)=>(a*a);
exports.parameter=(a)=>(4*a);

// Second way 

const area=(a)=>(a*a);
const parameter=(a)=>(4*a);
module.exports.area=area;
module.exports.parameter=parameter;