inptAccess=document.querySelector(".inpt");
btnAccess=document.querySelector(".btn");

nameAccess=document.querySelector(".name");
bioAccess=document.querySelector(".bio");
reposAccess=document.querySelector(".repos");
followerAccess=document.querySelector(".followers");
followingAccess=document.querySelector(".following");
imagAccess=document.querySelector(".dp");

msgAccess=document.querySelector(".msg");

btnAccess.addEventListener("click",getUser);

async function getUser(){
    msgAccess.innerText = "Loading...";
   
    let name=inptAccess.value.trim();
    let url=`https://api.github.com/users/${encodeURIComponent(name)}`;
    try{
        let response=await fetch(url);
        if(!response.ok){
            throw new Error("cannot find user error 1");
        }
        let data=await response.json();
         msgAccess.innerText="";
        nameAccess.innerText=data.name;
        bioAccess.innerText=data.bio;
        reposAccess.innerText=data.public_repos;
        followerAccess.innerText=data.followers;
        followingAccess.innerText=data.following;
        imagAccess.src=data.avatar_url;
        



    }
    catch(error){
        console.log(error);
        msgAccess.innerText="user not found";
    }
}