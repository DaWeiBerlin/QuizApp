window.onscroll = function(){
    let shoppingCart = document.getElementById("shoppingCart");
    console.log(window.scrollY)
    if(window.scrollY > 70){
        shoppingCart.style = "top:0"
    }  else {
        shoppingCart.style = "top: 70px"
    }
}