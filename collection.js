
var sideNav=document.querySelector(".side-navbar")


 function showBar()
 {
    sideNav.style.left="0"
 }
 function hideBar()
 {
    sideNav.style.left="-60%"
 }

var inputedText=document.getElementById("searchText")
 var product=document.getElementById("collection-container")
 var Elements=product.querySelectorAll("div")
 
 inputedText.addEventListener("keyup",function()
{
    var inputedValue=event.target.value.toUpperCase()

    for(var count=0;count<Elements.length;count++)
    {
        var productName=Elements[count].querySelector("p").textContent

        if(productName.toUpperCase().indexOf(inputedValue)<0)
        {
            Elements[count].style.display="none"
        }
        else{
            Elements[count].style.display="block"
        }
    }
})
