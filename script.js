const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        //eltűnés újra
         else{
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

let laciInfo = () => {
    
}