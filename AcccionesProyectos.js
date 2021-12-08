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

document.getElementById("mos1").addEventListener("click", mostrar1);
document.getElementById("ocu1").addEventListener("click", ocultar1);
/*document.getElementById("mos2").addEventListener("click", mostrar2);
document.getElementById("ocu2").addEventListener("click", ocultar2);*/

function mostrar1(){
    document.getElementById("pro1").style.height="250px";
    document.getElementById("pro1").style.boxShadow= "5px 5px 5px 0 rgba(33, 133, 213,.3)";
    document.getElementById("pro1").style.backgroundColor= "rgba(255, 255, 255,.2)";
    document.getElementById("pro1").style.transform= "scale(1.05,1.05)";

    document.getElementById("info1").style.opacity="1";
    document.getElementById("info1").style.top="80px"
    document.getElementById("info1").style.height="180px";

    document.getElementById("ocu1").style.opacity="1";
    document.getElementById("mos1").style.opacity="0";
}
function ocultar1(){
    document.getElementById("pro1").style.height="50px";
    document.getElementById("pro1").style.boxShadow= "0px 0px 0px 0 transparent";
    document.getElementById("pro1").style.backgroundColor= "rgba(255, 255, 255,.1)";
    document.getElementById("pro1").style.transform= "scale(1,1)";

    document.getElementById("info1").style.opacity="0";
    document.getElementById("info1").style.height="0px";

    document.getElementById("ocu1").style.opacity="0";
    document.getElementById("mos1").style.opacity="1";
}
/*function mostrar2(){
    document.getElementById("pro2").style.height="250px";
    document.getElementById("pro2").style.boxShadow= "5px 5px 5px 0 rgba(33, 133, 213,.3)";
    document.getElementById("pro2").style.backgroundColor= "rgba(255, 255, 255,.2)";
    document.getElementById("pro2").style.transform= "scale(1.05,1.05)";

    document.getElementById("info2").style.opacity="1";
    document.getElementById("info2").style.top="80px"
    document.getElementById("info2").style.height="180px";

    document.getElementById("ocu2").style.opacity="1";
    document.getElementById("mos2").style.opacity="0";
}
function ocultar2(){
    document.getElementById("pro2").style.height="50px";
    document.getElementById("pro2").style.boxShadow= "0px 0px 0px 0 transparent";
    document.getElementById("pro2").style.backgroundColor= "rgba(255, 255, 255,.1)";
    document.getElementById("pro2").style.transform= "scale(1,1)";

    document.getElementById("info2").style.opacity="0";
    document.getElementById("info2").style.height="0px";

    document.getElementById("ocu2").style.opacity="0";
    document.getElementById("mos2").style.opacity="1";
}*/

