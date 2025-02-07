function sum(num1,num2,hello){
    let result=num1+num2;
    hello(result);
}

function result(sum){
    console.log(sum);
}

sum(8,6,"result");