// ===============================
// EFEITO NO HEADER AO ROLAR
// ===============================

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background = "#083b66";
        header.style.height = "65px";

    }else{

        header.style.background = "#0d47a1";
        header.style.height = "80px";

    }

});




// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================

const botaoTopo = document.getElementById("topo");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        botaoTopo.style.display="block";

    }else{

        botaoTopo.style.display="none";

    }


});



botaoTopo.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});





// ===============================
// ANIMAÇÃO AO APARECER NA TELA
// ===============================


const elementos = document.querySelectorAll(
".card, .curso, .sobre, .galeria img"
);



const observer = new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.style.opacity="1";

            entrada.target.style.transform="translateY(0)";


        }


    });



});




elementos.forEach(elemento=>{


    elemento.style.opacity="0";

    elemento.style.transform="translateY(40px)";

    elemento.style.transition="0.8s";


    observer.observe(elemento);


});





// ===============================
// ANIMAÇÃO DOS BOTÕES
// ===============================


const botoes = document.querySelectorAll(".btn");



botoes.forEach(botao=>{


    botao.addEventListener("mouseenter",()=>{


        botao.style.transform="scale(1.05)";


    });



    botao.addEventListener("mouseleave",()=>{


        botao.style.transform="scale(1)";


    });



});





// ===============================
// FORMULÁRIO
// ===============================


const formulario = document.querySelector("form");



formulario.addEventListener("submit",(evento)=>{


    evento.preventDefault();


    alert(
    "Mensagem enviada com sucesso! A escola entrará em contato."
    );


    formulario.reset();


});





// ===============================
// MENU SUAVE
// ===============================


const links = document.querySelectorAll("nav a");



links.forEach(link=>{


    link.addEventListener("click",(e)=>{


        const destino = document.querySelector(
            link.getAttribute("href")
        );


        if(destino){


            e.preventDefault();


            destino.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});
