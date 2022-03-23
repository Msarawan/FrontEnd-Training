 const accordianItemHeaders = document.querySelectorAll(".accordion-item-header");

 accordianItemHeaders.forEach(accordianItemHeader => {
  accordianItemHeader.addEventListener("click" , event=>{
     const currentlyActiveAccordianHeader = document.querySelector(".accordion-item-header.active");
     if(currentlyActiveAccordianHeader && currentlyActiveAccordianHeader!=accordianItemHeader){
        currentlyActiveAccordianHeader.classList.toggle("active");
        currentlyActiveAccordianHeader.nextElementSibling.style.maxHeight = 0;
     }
     
       accordianItemHeader.classList.toggle("active");
   const accordianItemBody = accordianItemHeader.nextElementSibling;
           if(accordianItemHeader.classList.contains("active")){
           accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
         }
       else{
          accordianItemBody.style.maxHeight = 0;
          }
 });
 });




