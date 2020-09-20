var puntos=".";
setInterval(function (){
if(puntos=="..."){
puntos="."
}else{
puntos=puntos+".";
}
document.getElementById("Proximamente").innerHTML = "Proximamente"+puntos;
var d = new Date();
fecha1 = d.getDate();
fecha2 = (d.getMonth()+1) + "/";
fecha3 = d.getFullYear();
hora1 = d.getHours() + ":";
hora2 = d.getMinutes() + "";
hora3 = d.getSeconds();
document.getElementById("dia").innerHTML = "Nuevo "+(fecha1-19)+"d";

}, 1000)
