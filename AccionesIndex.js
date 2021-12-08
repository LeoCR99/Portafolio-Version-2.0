window.addEventListener("load",function(){
    console.log("Termino de cargar");

    var elemento = document.getElementsByTagName("a")[7];
    elemento.style.animationName="animacionCV";
    elemento.style.animationDuration="2.5s";
    elemento.style.opacity="1";

    var elemento1 = document.getElementsByTagName("p")[0];
    elemento1.style.animationName="animacionCV";
    elemento1.style.animationDuration="2.5s";
    elemento1.style.opacity="1";

    var elemento2 = document.getElementById("nom");
    elemento2.style.animationName="animacionCV";
    elemento2.style.animationDuration="2.5s";
    elemento2.style.opacity="1";

})

window.addEventListener('scroll',function(){
    var alturaPan = window.innerHeight;
    var anchoPan = window.innerWidth;

    var subir = document.getElementById("subir");
    var al = alturaPan-80;
    var an = anchoPan-80;
    subir.style.top=al+"px";
    subir.style.left=an+"px";
    console.log(al,an);

    var elemento1 = document.getElementsByTagName("section")[1];
    var elemento2 = document.getElementsByTagName("section")[2];
    var elemento3 = document.getElementsByTagName("section")[3];
    
    var elemento4 = document.getElementsByTagName("section")[4];
    var elemento5 = document.getElementsByTagName("section")[5];
    var elemento6 = document.getElementsByTagName("section")[6];
    var elemento7 = document.getElementsByTagName("section")[7];
    var elemento8 = document.getElementsByTagName("section")[8];

    var foto = document.getElementById("fotof");

    var distancia1=elemento1.getBoundingClientRect().top;
    var distancia2=elemento4.getBoundingClientRect().top;
    var distancia3=foto.getBoundingClientRect().top;
    
    if(distancia1 <= (alturaPan/1.3)){
        elemento1.style.opacity="1";
        elemento1.style.top="0px";

        elemento2.style.opacity="1";
        elemento2.style.top="0px";

        elemento3.style.opacity="1";
        elemento3.style.top="0px";
    } else {
        elemento1.style.opacity="0";
        elemento1.style.top="50px";

        elemento2.style.opacity="0";
        elemento2.style.top="50px";
        
        elemento3.style.opacity="0";
        elemento3.style.top="50px";
    }

    if(distancia2 <= (alturaPan/1.3)){
        elemento4.style.opacity="1";
        elemento4.style.top="0px";

        elemento5.style.opacity="1";
        elemento5.style.top="0px";

        elemento6.style.opacity="1";
        elemento6.style.top="0px";

        elemento7.style.opacity="1";
        elemento7.style.top="0px";

        elemento8.style.opacity="1";
        elemento8.style.top="0px";
    } else {
        elemento4.style.opacity="0";
        elemento4.style.top="50px";

        elemento5.style.opacity="0";
        elemento5.style.top="50px";

        elemento6.style.opacity="0";
        elemento6.style.top="50px";

        elemento7.style.opacity="0";
        elemento7.style.top="50px";

        elemento8.style.opacity="0";
        elemento8.style.top="50px";
    }

    if(distancia3 <= (alturaPan/1.3)){
        foto.style.transform="scale(1,1)";
        subir.style.opacity="1";
        subir.style.pointerEvents="painted";
    } else {
        foto.style.transform="scale(0,0)";
        subir.style.opacity="0";
        subir.style.pointerEvents="none";
    }

})

document.getElementById("menu-mostrar").addEventListener("click",function(){
    var mos = document.getElementById("menu-mostrar");
    var ocu = document.getElementById("menu-ocultar");
    var men = document.getElementById("menu-desplegable");
    var a1 = document.getElementsByTagName("a")[4];
    var a2 = document.getElementsByTagName("a")[5];
    var a3 = document.getElementsByTagName("a")[6];

    mos.style.display="none";
    ocu.style.display="block";
    men.style.width="100vw";
    men.style.opacity="1";

    a1.style.pointerEvents="painted";
    a2.style.pointerEvents="painted";
    a3.style.pointerEvents="painted";
})
document.getElementById("menu-ocultar").addEventListener("click",function(){
    var mos = document.getElementById("menu-mostrar");
    var ocu = document.getElementById("menu-ocultar");
    var men = document.getElementById("menu-desplegable");
    var a1 = document.getElementsByTagName("a")[4];
    var a2 = document.getElementsByTagName("a")[5];
    var a3 = document.getElementsByTagName("a")[6];

    ocu.style.display="none";
    mos.style.display="block";
    men.style.width="0vw";
    men.style.opacity="0";
    
    a1.style.pointerEvents="none";
    a2.style.pointerEvents="none";
    a3.style.pointerEvents="none";
})