//  <select class="convoType">
//             <option value="cel">convert to Celsius </option>
//             <option value="fer">convert to Fahrenheit</option>
           
//         </select>

// let convoTypeAccess=document.querySelector(".convoType");
// if(convoTypeAccess.value=="cel"){

productNameAccess=document.querySelector(".inpt1");
productTypeAccess=document.querySelector(".prod-type");
submitBtnAccess=document.querySelector(".btn1");

filterAccess=document.querySelector(".filter-type");
categoryBtnAccess=document.querySelector(".btn2");

paraAccess=document.querySelector(".para");

submitBtnAccess.addEventListener("click",addProduct);
categoryBtnAccess.addEventListener("click",filterProduct);

let product=[];

function addProduct(){
    product.push({
        name:productNameAccess.value,
        category:productTypeAccess.value
    });
}
let output="";
function filterProduct(){
    output="";
    for(let i=0;i<product.length;i++){
        if(product[i].category == filterAccess.value){
        output += product[i].name + "\n";
        }
    }
    paraAccess.innerText=output;
}