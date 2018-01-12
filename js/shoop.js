var url = location.href;
var arr = url.split("?");
Ajax("get","../project.json","",function(data){
	var data = data[0].EternalRoselist;
	var oCont = document.querySelector('.cont');
	var oBig = oCont.querySelector('.bigpic');
	var oSmall = oCont.querySelectorAll('.smallpic');
	var oA = oCont.querySelectorAll('.small>a');
	var oTitle = oCont.querySelector('.right-title');
	var oPrice = oCont.querySelector('.price');
	for(var i in data){
		if(data[i].id==arr[1]){
			oBig.src = data[i].imgs1[0];
			for(var j in oSmall){
				oSmall[j].src = data[i].imgs[j];
			}
			oTitle.innerHTML = data[i].introduce;
			oPrice.innerHTML = data[i].price;
		}
	}
	for(var i in oA){
		oA[i].index = i;
		oA[i].onclick = function(){
			for(var j in oA){
				oA[j].className = '';
			}
			this.className = 'active';
			oBig.src = data[this.index].imgs1[this.index];
		}
	}
	var oGoIn = oCont.querySelector('.goin');
	var oIn = oCont.querySelector('.in');
	var count = 1;
	
	oGoIn.onclick = function(){
		var num = arr[1];
		if(getCookie('int')){
			var obj = JSON.parse(getCookie('int'));
		}else{
			var obj = {};
		}
		if(!obj[num]){
				obj[num]=count;
			}else{
				var count1 = obj[num];
				count1++;
				obj[num]=count1;
			}
		setCookie('int',JSON.stringify(obj),7);
	}
	oIn.onclick = function(){
		
	}
})


