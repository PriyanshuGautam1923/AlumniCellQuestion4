var i=3;
var mname = document.getElementById("moviename");
var tab = document.getElementsByTagName("table")[0];
var tre = document.getElementsByTagName("tr");
var rating = document.getElementById("imdbrating");
var btn = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];
btn.addEventListener('click',function(){
	var row = tab.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = i;
	cell2.innerHTML = mname.value;
	cell3.innerHTML = rating.value;
	cell3.classList.add("last");
	tre[i].style.background = "hsl(" + parseFloat(rating.value) * 10 + ", 100%, 50%)";
	i=i+1;
	mname.value = "";
	rating.value = "";

})
