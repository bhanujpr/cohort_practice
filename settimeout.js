function sum(num1=4,num2=9,hello=result){
    let result=num1+num2;
    hello(result);
}

function result(sum){
    console.log(sum);
}

setTimeout(sum,10000);
setInterval(sum,1000)