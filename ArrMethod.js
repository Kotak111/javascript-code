//toString() Return a string with array values

console.log("tostring() method....");
var bikes=["yamaha","bajaj","honda","tvs"];
console.log(bikes.toString());

//join retuens a new string by concating
console.log("join method...");
var bikes=["yamaha","bajaj","honda","tvs"];
console.log(bikes.join());
console.log(bikes.join(" "));
console.log(bikes.join("-"));

//pop method is remove the last element 
console.log("pop method...");
var bikes=["yamaha","bajaj","honda","tvs"];
console.log(bikes.pop());
console.log(bikes);

//push method is add new item in array end 
console.log("push method...");
var bikes=["yamaha","bajaj","honda","tvs"];
console.log(bikes.push("hero"));
console.log(bikes);

//shift method removes first element of array
console.log("shift method......");
var bikes=["yamaha","bajaj","honda","tvs"];
console.log(bikes.shift());
console.log(bikes);

//unshift method is add value in array in first
console.log("unshift....");
var bikes=["yamaha","bajaj","honda","tvs"];
console.log(bikes.unshift("splendor"));
console.log(bikes);

//delete method is used to delete perticular array element and deleted element are set in empty in output
console.log("delete method....");
var bikes=["yamaha","bajaj","honda","tvs"];
delete bikes[2];
console.log(bikes);

//concat method is used to concat a one or more in define a main array
console.log("concat method.......");
var arr=[1,2];
var arr1=[3,4];
var arr2=[5,6]
let newArr=arr.concat(arr1,arr2)
console.log(newArr);

//sort method is used to sort the element of array
console.log("sort method.....");
var arr= [5,4,3,2,1];
var str=["safa","year","apple","banana"] 
arr.sort()
console.log(arr);
str.sort()
console.log(str);

//splice method is overWrites the original array
console.log("splice method....");
var arr=[1,2,3,4,5]
arr.splice(0,1,"a","b")
console.log(arr);

//slice method is slice out a piece from an array
console.log("slice method...");
var arr=[1,2,3,4,5,6]
var number=arr.slice(1,4)
console.log(number);

//reverse method is set element in reverse   order
console.log("reverse method...");
var arr=[1,2,3,4,5]
arr.reverse()
console.log(arr);

//isArray method is return true if an object is an array.. 
console.log("isArray method...");
var arr=[1,2,3,4,5]
var str="harsh"
console.log(Array.isArray(arr));
console.log(Array.isArray(str));

//indexOf method is return the first index of a specidfied value...
console.log("indexOf method....");
var arr=["laptop","mobile","headset","router"]
console.log(arr.indexOf("mobile"));

// lastindexOf  method is return a lasr indec of a specified values
console.log("lastindexOf method....");
var arr=["laptop","mobile","headset","router"]
console.log(arr.lastIndexOf("mobile",4));

//find method is return the first element in the provide array that satisfies
console.log("find method...");
var arr=[1,2,3,0,5]
// console.log(arr.find());
const value=arr.find((ele)=>ele > 3)
console.log(value);

//findindex method return the index of the first element in an array that satisfies
console.log("findindex method....");
var arr=[1,3,0,5,18]
console.log(arr.findIndex((ele)=> ele >13));

//includes method return true if an array contains a specified value
console.log("include method");
var arr=[1,2,3,4]
var str=["harsh","raj","yes"]
console.log(arr.includes(1));
console.log(str.includes("jay"));

//entries method is return  array in object with key/values pair..
console.log("entries method...");
var arr=["sunday","monday","tuesday"]
const day=arr.entries()
//used for of loop compulsory 
for (let x of day)
{
    console.log(x + "\n");
}

//some method is test whether at letest one element in the array
console.log("some method....");
var arr=[3,10,18,20]
arr.some(checkAdult)
function checkAdult(arr){
    return arr >18;
}
//fill method is fills specified elements  in an array
console.log("fill method...");
var arr=["banana","orange","mango","apple"]
// console.log(arr.fill("kiwi"));
// console.log(arr.fill("kiwi", ));
arr.fill("kiwi",4)
console.log(arr);

//copyWithin method copies array elements to another position in the array
console.log("copyWithin method....");
var arr=["banana","kiwi","mango","orange"]
arr.copyWithin(2,0)
console.log(arr);
//copy the first two array elements to the third and foutrh  position
arr.copyWithin(2,0,2)
console.log(arr);  

//valueOf method is return the array itself..
console.log("valueOf method....");
var arr=["banana","kiwi","mango","orange"]
const newArr1=arr.valueOf();
console.log(newArr1);

//filter method is create a new array filled with element
console.log("filter method....");
var arr=[11,2,18,5,19]
console.log(arr.filter(checkage));
function checkage(arr)
{
     return arr >=18;
}

//reduce method executes a reducer function for array element..
console.log("reduce method....");
var arr=[175,50,25]
console.log(arr.reduce(data));
function data(total ,num){
    return total -num
}

//from method is create an array from a string
console.log("from method..");
console.log(Array.from("harsh"));