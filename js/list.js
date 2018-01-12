Ajax("get","../project.json","",function(data){
	var data = data[0].EternalRoselist;
	var oList = document.getElementById('list');
	var str = '';
	for(var i=0;i<data.length;i++){
		str += '<li data-id="'+data[i].id+'"><div class="pic"><img src="'+data[i].images+'"></div><b class="name">'+data[i].name+'</b><p class="introduce">'+data[i].introduce+'</p><b class="price">'+data[i].price+'</b></li>'
	}
	oList.innerHTML = str;

})
var oTop = document.getElementById('top');
var oTopNav = document.getElementById('topnavbg');
window.onscroll = function(){
	var scrollT = document.body.scrollTop||document.documentElement.scrollTop;
	if(scrollT>=150){
		oTop.style.display = 'block';
		oTopNav.style.display = 'block';
	}else{
		oTop.style.display = 'none';
		oTopNav.style.display = 'none';
	}
}
oTop.onclick = function(){
	document.body.scrollTop=document.documentElement.scrollTop=0;
}
var oList = document.getElementById('list');
oList.onclick = function(e){
	var e = e||event;
	var target = e.target||e.srcElement;
	if(target.tagName=='IMG'){
		var num = target.parentNode.parentNode.getAttribute('data-id')
		location.href="../html/shoop.html?"+num;
	}
}