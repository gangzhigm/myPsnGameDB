$(function(){
	var psvList=document.querySelector("#PSV");
	var ps3List=document.querySelector("#PS3");
	var ps4List=document.querySelector("#PS4");
	var numbers = psndata.game;
	numbers.forEach(addGame);




	function addGame(item, index) {
		if (item.playstation=="psv") {
			psvList.innerHTML = psvList.innerHTML +"<div>"+ item.name +"</div>";	
		}else if(item.playstation=="ps3"){
			ps3List.innerHTML = ps3List.innerHTML +"<div>"+ item.name +"</div>";
		}else if(item.playstation=="ps4"){
			ps4List.innerHTML = ps4List.innerHTML +"<div>"+ item.name +"</div>";
		}
	}
})








// 参数                                          	描述
// function(currentValue, index, arr)	            必需。 数组中每个元素需要调用的函数。
// 函数参数:
// 参数	                                            描述
// currentValue	                                必需。当前元素
// index	                                        可选。当前元素的索引值。
// arr	                                            可选。当前元素所属的数组对象。
// thisValue	                                    可选。传递给函数的值一般用 "this" 值。
//                                                 如果这个参数为空， "undefined" 会传递给 "this" 值