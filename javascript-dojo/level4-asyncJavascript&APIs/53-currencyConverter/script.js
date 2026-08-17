amountAccess=document.querySelector(".amount");
fromAccess=document.querySelector(".from");
toAccess=document.querySelector(".to");
btnAccess=document.querySelector(".btn");
msgAccess=document.querySelector(".msg");
resultAccess=document.querySelector(".result");


btnAccess.addEventListener("click",convertCurr);

async function convertCurr(){
    msgAccess.innerText="";
    let  amount=Number(amountAccess.value);
    let from=fromAccess.value.trim();
    let to=toAccess.value.trim();

    // let url=`https://api.frankfurter.app/latest?amount=${encodeURIComponent(amount)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    let url = `https://api.frankfurter.dev/v1/latest?amount=${encodeURIComponent(amount)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
    try{
        let response=await fetch(url);
        if(!response.ok){
            throw new Error("cannot convert error 1");
        }
        let data=await response.json();
        console.log(data);
        resultAccess.innerText=data.rates[to];

    }catch(error){
        console.log(error);
        msgAccess.innerText="cannot convert currency"
    }
}
