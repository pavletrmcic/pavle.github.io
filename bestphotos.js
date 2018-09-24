var img;
	img=document.getElementsByTagName('img');
for (var i = img.length - 1; i >= 0; i--) {
	img[i].addEventListener("click", function()
{
	var i= this.getAttribute("src");
	var p= "url("+i+ ")";
//	var pic=document.querySelector('#im');
//	pic.setAttribute("src",this.getAttribute("src"));
document.querySelector('#presentt').style.background= p;
document.querySelector('#presentt').style.width = "500px";
document.querySelector('#presentt').style.height = "350px";
document.documentElement.scrollTop = 140;
})
}