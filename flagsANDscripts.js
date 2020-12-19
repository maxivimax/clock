	setInterval(function () {  
	 flagg = 0

	 if(flagg == 0){
	 	document.getElementById('time').style.fontSize = "170px";
	 	flagg = 1
	 }

	 date = new Date(),  
	 h = date.getHours(),  
	 m = date.getMinutes(),  
	 s = date.getSeconds(),  
	 h = (h < 10) ? '0' + h : h,  
	 m = (m < 10) ? '0' + m : m,  
	 s = (s < 10) ? '0' + s : s,  
	 mouth = date.getMonth(),
	 datee = date.getDate(),
	 yearr = date.getFullYear()

	if(mouth == 1){
		mou = "Февраля"
	}
	if(mouth == 2){
	 	mou = "Марта"
	}

	if(mouth == 3){
		 	mou = "Апреля"
		 }

	if(mouth == 4){
		 	mou = "Мая"
		 }

	if(mouth == 5){
		 	mou = "Июня"
		 }
	if(mouth == 6){
		 	mou = "Июля"
		 }

	if(mouth == 7){
		 	mou = "Августа"
		 }

	if(mouth == 8){
			mou = "Сентября"
		 }

	if(mouth == 9){
		 	mou = "Октября"
		 }

	if(mouth == 10){
		 	mou = "Ноября"
		 }

	if(mouth == 11){
		 	mou = "Декабря"
		 }

	if(mouth == 12){
		 	mou = "Января"
		 }

	 document.getElementById('time').innerHTML = h + ':' + m + ":" + s; 
		
	 document.getElementById('dmy').innerHTML = datee + ' ' + mou + ' ' + yearr;  
	}, 1000);
