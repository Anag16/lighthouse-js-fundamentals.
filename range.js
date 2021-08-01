function range(start,end,step){
 let result = [];

if( (start == undefined || end == undefined || step == undefined) || (start > end) || (step <= 0)){
  return result;
}
else {
  for (let i = start; i <= end; i = i + step){
   result.push(i);
 } 
   return result;
}
}
