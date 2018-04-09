function alignContent() {
    for (var e = $(window).height(), n = document.querySelectorAll("section.container"), t = 0; t < n.length; t++)
        n[t].style.height = e + "px";
    $(".content").each(function() {
        var n = $(this).height();
        $(this).css("top", e / 2 - n / 2)
    });
}
alignContent();
$(window).bind("resize", function() {
    alignContent()
});
//slogan
{let typedQuotes = document.getElementsByClassName('typed-quotes')[0];
const slogan = ['这是一款','真正的轻量MARKDOWN编辑器','全新的记录方式'];
let cursor = document.getElementsByClassName('cursor')[0];
let j = 0;
let k = 0;
function s(m,n){
  if(k<m){
  for(let i = 0;i<=k;i++){
    typedQuotes.innerText += slogan[n][i];
  }
  }
  if(k>=m&&k<(m+8)){
    typedQuotes.innerText = slogan[n];
    if(k>m+2) {cursor.style.opacity='0';}
    if(k>m+5) {cursor.style.opacity='1';}
    if(k>=m+7){cursor.style.opacity='0.7';}
  }
  if(k>=(m+8)&&k<(m*2+9)){
  for(let i = 0;i<=(m+m-k+6);i++){
    typedQuotes.innerText += slogan[n][i];
  }
  }
  k++;
  if(k==(m*2+9)){k=0;}
}
var timer1 = setInterval(function(){
  typedQuotes.innerText = '';
  j=j%81;
  if(j<17){
    s(4,0);
  }
  if(j>=17&&j<58){
    s(16,1);
  }
  if(j>=58&&j<81){
    s(7,2)
  }
  j++;
},100);}
