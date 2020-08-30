var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function (){
    if(this.readyState==4 && this.status==200)
    {
        var ob=JSON.parse(xhr.response);
         
        for(var i=0;i<10;i++)
        { 
            document.getElementsByClassName("sp11")[i].innerHTML=ob[i].name;
            document.getElementsByClassName("sp12")[i].innerHTML=ob[i].empid;
            document.getElementsByClassName("sp13")[i].defaultValue=ob[i].skills;
            document.getElementsByClassName("sp14")[i].innerHTML=ob[i].project;
            document.getElementsByClassName("sp15")[i].innerHTML=ob[i].HCM;
            if(ob[i].Gender=="M")
            {
                document.getElementsByClassName("image")[i].innerHTML="<img class='imgsize' src = 'male.png'>";
            }
            else if(ob[i].Gender=="F")
            {
                document.getElementsByClassName("image")[i].innerHTML="<img class='imgsize' height ='230' src = 'female.png'>";
            }
            document.getElementsByClassName("gender")[i].innerHTML=ob[i].Gender;   
            document.getElementsByClassName("col1")[i].innerHTML=ob[i].name;
            document.getElementsByClassName("col2")[i].innerHTML=ob[i].empid;
            document.getElementsByClassName("col3")[i].defaultValue=ob[i].skills;
            document.getElementsByClassName("col4")[i].innerHTML=ob[i].project;
            document.getElementsByClassName("col5")[i].innerHTML=ob[i].HCM;
             }

        var sk;
        var option;
        var page;
         var bt1;
         var bt2;
        
        
        sk=document.querySelectorAll(".sp13");
        bt1=document.querySelectorAll(".col3");
        option=document.querySelectorAll(".sp16");
        bt2=document.querySelectorAll(".col6");

        sk.forEach((element,index)=>{
           element.onfocus= ()=> editing(page=index)
        })
        option.forEach((element,index)=>{
            element.onclick = ()=> editing(page=index)
        })
        bt1.forEach((element,index)=>{
           element.onfocus= ()=> editnew(page=index)
        })
        bt2.forEach((element,index)=>{
            element.onclick = ()=> editnew(page=index)
        })

        function editing(page){
         sk[page].classList.remove('sp13');
         option[page].innerText='Save';
         
         option[page].onclick = ()=>{
        option[page].innerText='Edit';
        sk[page].classList.add('sp13');
         }
        }

        function editnew(page){
            bt1[page].classList.remove('col3');
            bt2[page].innerText='Save';
            bt2[page].onclick = ()=>{
                bt2[page].innerText='Edit';
                bt1[page].classList.add('col3');
            }
        }

    }
}
xhr.open("GET","new.json",true);
xhr.send();

function myFunction(){
    document.querySelector("#card").classList.toggle("invisible");
    document.querySelector("#list").classList.toggle("visible");  
}
