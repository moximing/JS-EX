window.onload=function(){
 function ele(eleId){
 return document.getElementById(eleId);
 }
function changeQuote(color){
  document.body.style.backgroundColor=color;
  ele("txt").style.color=color;
  ele("au").style.color=color;
}
ele('btn2').onclick=function(){
  changeQuote("red");
}

}