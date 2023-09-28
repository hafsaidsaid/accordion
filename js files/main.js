const accordionQuestions = document.querySelectorAll(".accordion-sec .box-accordion .accordion-q-a .accordion-question");
console.log(accordionQuestions);

const accordionBox = document.querySelectorAll(".accordion-sec .box-accordion .accordion-q-a");
console.log(accordionBox);

accordionQuestions.forEach(q=> {
    q.addEventListener("click",(e)=>{
        if(e.target.parentElement.classList.contains("active")) {
            e.target.parentElement.classList.remove("active");
        }else {
            accordionQuestions.forEach(q=>q.parentElement.classList.remove("active"));
            e.target.parentElement.classList.toggle("active");
        }
    })
})