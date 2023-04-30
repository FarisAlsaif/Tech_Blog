// 2.a
function likeArticle(){
    const body = document.body;
    const likeNum =  body.querySelector("#like_num").firstChild;
    let number = parseInt(likeNum.nodeValue) +1;
    likeNum.textContent = number;    
}
// 2.b
function setLanguage(){
    const selected_language = document.getElementById("language-option").value ;

    var fileName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);;
    fileName = fileName.split(".").slice(0,-1)[0];

    console.log(fileName);
    if (selected_language == "Arabic") {
        document.getElementById("stylesheet").href = `${fileName}AR_stylesheet.css`;
      } else if (selected_language == "English") {
        document.getElementById("stylesheet").href =`${fileName}_stylesheet.css`;
      }
}
// 2.c
// Delete an article
function deleteArticle(button){

     if(confirm("Are you sure?")){
        var div = button.parentNode.parentNode.parentNode; 
        div.remove();
     }
}
// 2.f
// validate new article an article
function validateForm(button){
    const content = document.getElementById("content").value;
    console.log(content.length); 

    if (content.length==0){
        alert("Please add text");
        return false;
      }
      else if (content.length < 10) {
        alert("Please enter at least 10 characters.");
        return false;
      }

      return true; 
}