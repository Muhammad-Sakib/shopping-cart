//minus icon event handler
const minus1 = document.getElementById("minus1");

minus1.addEventListener("click",function(){
    const value1 = document.getElementById("value1").value;
    const value1Num = parseInt(value1);
    if(value1Num >0){
        const intoValue = document.getElementById("value1").value = value1Num - 1;
    const totalAmount1 = 1219 * intoValue;
    document.getElementById("amount1").innerHTML = totalAmount1;
    const subTotal = parseInt(document.getElementById("subTotal").innerHTML);
    document.getElementById("subTotal").innerHTML = subTotal - 1219;
        document.getElementById("subTotalFinal").innerHTML = subTotal - 1219;
    }
})
 

//plus icon event handler

plus1.addEventListener("click",function(){
    const value1 = document.getElementById("value1").value;
    const value1Num = parseInt(value1);
    const intoValue = document.getElementById("value1").value = value1Num + 1;
    const totalAmount2 = 1219 * intoValue;
    document.getElementById("amount1").innerHTML = totalAmount2;
    const subTotal = parseInt(document.getElementById("subTotal").innerHTML);
    document.getElementById("subTotal").innerHTML = subTotal + 1219;
    document.getElementById("subTotalFinal").innerHTML = subTotal + 1219;
})


//minus icon event handler
const minus2 = document.getElementById("minus2");

minus2.addEventListener("click",function(){
    const value1 = document.getElementById("value2").value;
    const value1Num = parseInt(value1);
    if(value1Num >0){
    const intoValue = document.getElementById("value2").value = value1Num - 1;
    const totalAmount1 = 59 * intoValue;
    document.getElementById("amount2").innerHTML = totalAmount1;
    const subTotal = parseInt(document.getElementById("subTotal").innerHTML);
    document.getElementById("subTotal").innerHTML = subTotal - 59;
        document.getElementById("subTotalFinal").innerHTML = subTotal - 59;
    }
})
 

//plus icon event handler
const plus2 = document.getElementById("plus2");
plus2.addEventListener("click",plus2Func);
function plus2Func(){
    const value1 = document.getElementById("value2").value;
    const value1Num = parseInt(value1);
    const intoValue = document.getElementById("value2").value = value1Num + 1;
    const totalAmount2 = 59 * intoValue;
    document.getElementById("amount2").innerHTML = totalAmount2;
    const subTotal = parseInt(document.getElementById("subTotal").innerHTML);
    document.getElementById("subTotal").innerHTML = subTotal + 59;
    document.getElementById("subTotalFinal").innerHTML = subTotal + 59;
    
}
 const remove1  = document.getElementById("remove1");
const  remove2  = document.getElementById("remove2");

remove1.addEventListener("click",function(){
    document.getElementById("cartItem1").style.display = "none";
})
remove2.addEventListener("click",function(){
    document.getElementById("cartItem2").style.display = "none";
})

