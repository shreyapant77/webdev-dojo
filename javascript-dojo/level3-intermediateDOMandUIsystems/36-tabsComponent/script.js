containerAccess=document.querySelector(".container");

let pages=[
{   pageName:"HTML",
    pageContent:"hyper text markup language",
    active:true
},
{
    pageName:"CSS",
    pageContent:"cascading style sheets",
    active:false
},
{
    pageName:"Javascript",
    pageContent:"a programming language",
    active:false
}

];


function pageRender(){
    let output="";
    for(let i=0;i<pages.length;i++){
        output+=`<button onClick="toggleTab(${i})">${pages[i].pageName}</button>`;
        if(pages[i].active==true){
            output+=`<p>${pages[i].pageContent}</p>`
        }
    }
    containerAccess.innerHTML=output;

}
pageRender();

function toggleTab(index){
    // pages[index].active=!pages[index].active; this is toggle logic 
    pages[index].active=true;

    for(let i=0;i<pages.length;i++){
        if(i!=index){
            pages[i].active=false;
        }
    }
    pageRender();
}