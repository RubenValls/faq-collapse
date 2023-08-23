const faqs = document.querySelectorAll('.faq')
const faqsBtn = document.querySelectorAll('.faq-toggle')

faqsBtn.forEach((faqBtn, index) => {
    let visible = false;
    faqBtn.addEventListener("click", () => {
        if(visible){
            faqs[index].classList.remove("active")
            faqBtn.innerHTML = '<i class="fa-solid fa-chevron-down fa-lg" style="color: #000000;"></i>'
            visible = false;
        }else{
            faqs[index].classList.add("active")
            faqBtn.innerHTML = '<i class="fa-solid fa-xmark fa-xl" style="color: #000000;"></i>'
            visible = true;
        }
    })
})