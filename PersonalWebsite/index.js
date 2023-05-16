let Theme=document.getElementById('theme-change');
Theme.addEventListener('click',()=>{
  var body = document.querySelector("body");
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
});