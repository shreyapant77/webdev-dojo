btnAccess=document.querySelector(".btn");

btnAccess.addEventListener("click",getNews);

newsAccess=document.querySelector(".news");

async function getNews(){
    let url=`https://hacker-news.firebaseio.com/v0/newstories.json`;

    try{
        let response=await fetch(url);
        if(!response.ok){
            throw new Error("cannot fetch news error 1");
        }
        let data=await response.json();
        console.log(data);
        console.log(data[0]);

        let storiesID=data.slice(0,5);
        console.log(storiesID);

        let stories = [];

        for(let ids of storiesID){
            let urlStory=`https://hacker-news.firebaseio.com/v0/item/${ids}.json`
            try{
                let responseStory=await fetch(urlStory);
                if(!responseStory.ok){
                    throw new Error("cannot load stories ");
                }
                let dataStory=await responseStory.json();

                console.log(dataStory);
                stories.push(dataStory);

               
            }
            catch(error){
                console.log(error);
            }
             

                
        }
        for(let i=0;i<stories.length;i++){
                    let author=document.createElement("p");
                    author.innerText=stories[i].by;
                    newsAccess.appendChild(author);

                    let storyName=document.createElement("p");
                    storyName.innerText=stories[i].title;
                    newsAccess.appendChild(storyName);
                
                    // let linkOfStory=document.createElement("p");
                    let linkOfStory=document.createElement("a");
                    linkOfStory.innerText="Read full story here";
                    linkOfStory.href=stories[i].url;
                    newsAccess.appendChild(linkOfStory);
                    
                    let line=document.createElement("h2");
                    line.innerText="------------------";
                    newsAccess.appendChild(line);
        }

    }
    catch(error){
        console.log(error);
    }
}