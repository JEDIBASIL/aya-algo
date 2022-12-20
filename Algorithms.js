const multiDesc = (arr) => arr.sort((a,b)=>b-a).map((element, i) => element * (1+i))
console.log(multiDesc([1, 2, 3, 4, 5]));
