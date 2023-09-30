const endDate="30 october 2023 11:30 AM"
document.getElementById("endDate").innerText=endDate;
const inputs=document.querySelectorAll("input");
const clock=()=>{
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    
    
    inputs[0].value =Math.floor(diff/3600/24);
    inputs[1].value =Math.floor((diff/3600)%24);
    inputs[2].value =Math.floor((diff/60)%60);
    inputs[3].value =Math.floor((diff)%60);
    //convert into days;


     
}
clock()
setInterval(
    ()=>{
        clock()
    },
    1000
)