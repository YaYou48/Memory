// var selectElements = document.getElementsByTagName("td");
// for (var i = 0; i < selectElements.length; i++) {
//     selectElements[i].addEventListener("click", function(){
//         this.style.backgroundImage = "url(img/cat1.jpg)"
//     })
// }
var test = document.getElementsByClassName("c1");
for (var i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function(){
        this.children.style.visibility = "visible";
    })
}
