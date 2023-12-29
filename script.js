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


let ismmeg = document.querySelector(".ismmeg");
let infosect = document.querySelector(".ismmegengem");
ismmeg.addEventListener("click",() =>{
    let h1 = document.createElement("h1");
    h1.innerHTML = "Szia, Laci vagyok!" 
    let p1 = document.createElement("p");
    p1.innerHTML = "Kiskorom óta nagyon szeretem az autókat, ezért mindig is autószerelő szerettem volna lenni amikor nagy leszek, de ahogy az idő repült elkezdett fájni a hátam, így más hobbit kellett találnom, így találkoztam unokám születésnapján a számítógéppel. Nagyon felkeltette az érdeklődésem a villódzó színvilága a monitornak, és a sok kis apró gomb a billentyűzeten, így elhatároztam, hogy programozó leszek.<br> Így jutottam el ideáig, hogy több százezer kis dzsunior programozót vezethetek a tisztakód útjára, és szentlélekként őrzöm lelküket a salátakód kisértésétől.<br>"
    let p2 = document.createElement("p");
    p2.innerHTML = "Mostmár ismerem küldetésem, hogy megtaláljam a függvénybajnokot, és át adhassam legendás tudásom neki. Ez az életcélom."
    infosect.appendChild(h1);
    infosect.appendChild(p1);
    infosect.appendChild(p2);
});
let laciInfo = () => {
    
}