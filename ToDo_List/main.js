const input=document.getElementById("item");
const task=document.getElementById("list");

function addtask()
{
    if(input.value==='')
    {
        alert("You Must Write Something");
        
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        task.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        let but=document.createElement("button");
        but.innerHTML="Edit";
        li.appendChild(span);
        li.appendChild(but);
        saveData();
    }
    input.value="";
}

task.addEventListener("click",function(e){
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("done");
        saveData();
    }
    else if(e.target.tagName==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName==="BUTTON")
    {
        let li=document.createElement("li");
        const newText = prompt('Edit task:', li.textContent);
        
        if (newText !== null) 
        {
            li.innerHTML=newText;
            task.appendChild(li);
            let span=document.createElement("span");
        span.innerHTML="\u00d7";
        let but=document.createElement("button");
        but.innerHTML="Edit";
        li.appendChild(span);
        li.appendChild(but);
        e.target.parentElement.remove();
        }
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",task.innerHTML);
}

function showTask(){
    task.innerHTML=localStorage.getItem("data");
}
showTask();















