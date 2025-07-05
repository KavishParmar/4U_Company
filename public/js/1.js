    let body = document.getElementsByTagName('body');
    let container = document.getElementById("container");
    let Mcontainer = document.getElementById("m-container"); 
    let allServiceBtns = document.querySelectorAll(".sBtn");  

    // // ##  a container shows on clicking on the service-buttons 
    //  for (let btn of allServiceBtns) {
    //    btn.addEventListener("click",function(){
    //       container.style.display ="inline-block";
    //       document.body.style.overflow="hidden";
    //       document.getElementById("body").classList.add("body");

    //       //   ##   show specific items for specific btns  ##
    //       let s = (btn.nextElementSibling.nextElementSibling);
    //       Mcontainer.appendChild(s);
    //       s.style.display="inline-block";

    //       //   ##  To hide again the container
    //       let allXBtns = document.querySelectorAll(".X-btn");
    //       for (const XBtn of allXBtns) {
    //         XBtn.addEventListener("click",function(){
    //           container.style.display="none";
    //           document.body.style.overflow="scroll";
    //           document.getElementById("body").classList.remove("body");   
    //           btn.parentElement.appendChild(s);
    //           s.style.display="none";
    //         })
    //       }

    //     }); 
    //  }

       
    //   // ## border shows on click on location & search buttons and disapper on click outisde
    //  let srchBtns = document.querySelectorAll(".loc-search-area",".login-btn");
    //  for (const srchBt of srchBtns) {
    //  document.body.addEventListener('click', function(event){
    
    //     if(srchBt.contains(event.target)){ 
    //       srchBt.style.border ="0.01px solid rgb(0 0 255 / 54%)";
    //     } else { 
    //       srchBt.style.border ="0.8px solid rgb(201, 201, 201)";
    //     } 
    
    //     });
    //   };




    //   Login btn page
     let loginBtn = document.querySelector(".login-btn");
     loginBtn.addEventListener('click',()=>{
          container.style.display ="inline-block";
          document.body.style.overflow="hidden";
          document.getElementById("body").classList.add("body");

          //   ##   show specific items for specific btns  ##
            let lgnContainer = document.querySelector("#loginPage");
            console.dir(lgnContainer);
            Mcontainer.appendChild(lgnContainer);
            lgnContainer.style.display="block";
   
        


          //   ##  To hide again the container
          let allXBtns = document.querySelectorAll(".X-btn");
          for (const XBtn of allXBtns) {
            XBtn.addEventListener("click",function(){
              container.style.display="none";
              document.body.style.overflow="scroll";
              document.getElementById("body").classList.remove("body");   
            //   btn.parentElement.appendChild(s);
              lgnContainer.style.display="none";
            })
          }
     })

    


 
    
     