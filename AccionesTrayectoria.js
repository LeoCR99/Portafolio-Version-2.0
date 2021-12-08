window.addEventListener("load",function(){
    console.log("Termino de cargar")
    var foto = document.getElementById("foto2");
    foto.style.transitionDuration="1.5s";
    foto.style.transform="scale(1,1)";
})
document.getElementById("menu-mostrar").addEventListener("click",function(){
    var mos = document.getElementById("menu-mostrar");
    var ocu = document.getElementById("menu-ocultar");
    var men = document.getElementById("menu-desplegable");
    var a1 = document.getElementsByTagName("a")[3];
    var a2 = document.getElementsByTagName("a")[4];
    var a3 = document.getElementsByTagName("a")[5];

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
    var a1 = document.getElementsByTagName("a")[3];
    var a2 = document.getElementsByTagName("a")[4];
    var a3 = document.getElementsByTagName("a")[5];

    ocu.style.display="none";
    mos.style.display="block";
    men.style.width="0vw";
    men.style.opacity="0";
    
    a1.style.pointerEvents="none";
    a2.style.pointerEvents="none";
    a3.style.pointerEvents="none";
})