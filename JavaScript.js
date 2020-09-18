var puntos=".";
setInterval(function (){
if(puntos=="..."){
puntos="."
}else{
puntos=puntos+".";
}
document.getElementById("Proximamente").innerHTML = "Proximamente"+puntos;
}, 1000)
