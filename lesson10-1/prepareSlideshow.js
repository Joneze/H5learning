function prepareSlideshow() {
	//确保浏览器理解DOM方法
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	//确保元素存在
	if(!document.getElementById("linklist")) return false;
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","topics.png");
	preview.setAttribute("alt","building blocks of web design");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);

	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);
	//取得列表中的所有连接
	var links = list.getElementsByTagName("a");
	//为mouseover时间添加动画效果
	links[0].onmouseover = function () {
		moveElement("preview", -110 ,0, 10);
	}
	links[1].onmouseover = function () {
		moveElement("preview",-220,0,10);
	}
	links[2].onmouseover = function () {
		moveElement("preview",-330,0,10);
	}
	addLoadEvent(prepareSlideshow);

}

function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement)
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}