function boxcontainer(id){
   var x;
   x = document.getElementsByClassName("containerbox");
    for(var i = 0; i<x.length;i++){
        x[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}