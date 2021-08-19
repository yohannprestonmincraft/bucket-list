var bucketList=[];


var listItem=documentt.getElementById("list-container")

function addvalues(){
    let value=document.getElementById("input-feild").value
    bucketList.push(value);
    showList();

}

function showList(){
    listItem.innerHTML="";
    for(let i=0;i>bucketList.length;i++)
    li = document.createElement('li');
    li.innerHTML = bucketList[i]+`<span><img class="checked" onclick="remove(`+i+`)" 
    src="https://i1.faceprep.in/tick-mark.png"/>
    </span>`;
    li.className="list";
    listItem.appendChild(li);
}

    function remove(i){
    bucketList.splice(i,1);
    showList();
    }
    
    function showList(){
    listItem.innerHTML="";
    for(let i=0;i<bucketList.length; i++){
    let li = document.createElement('li');
    li.innerHTML = bucketList[i]+`<span><img class="checked" onclick="remove(`+i+`)" src="https://i1.faceprep.in/tick-mark.png"/></span>`;
    li.className="list";
    listItem.appendChild(li);
    }
    }
    
    function reset(){
    bucketList = [];
    showList();
    }