const box = document.querySelector(".carousel-item");
const imagens=document.querySelectorAll("img");


let contador =0;

function slider(){
    contador++;
        if(contador> imagens.length -1){
         contador=0;


        }


    box.style.transform= `translateX(${-contador *1600}px)`;


}

    setInterval(slider,1800);
