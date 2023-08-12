var var1=document.getElementById("ss");
var button1=document.getElementById("btn1");
var button2=document.getElementById("btn2");
var var4=document.getElementById("ppp");
button1.addEventListener('click',function(){
    var1.innerHTML
    
    });
    button1.addEventListener('click',function(){
       
       var4.innerHTML=var1.value;
       localStorage.setItem("resultat",var1.value);
        })
        button2.addEventListener('click',function(){
       
            var1.value="";
            var4.innerHTML="";

             })
             onload=()=>{
             var1.value=localStorage.getItem("resultat");
             }
            var said =document.getElementById("reload");
            said.addEventListener('click',()=>{
                location.reload();
                alert("la page est bien actualiser");
            })
            // alert(document.URL);
            // alert(document.domain);
            document.title="Said Halliche";
            document.write(document.title)
            
      
        //
     

