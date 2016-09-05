/*var i = 0;
var flag = true;*/
goAhead(0,true);
function goAhead(i, flag){
var go = setInterval(function(){
	/*Обработчик смещения*/
	if(flag&&i>=(-4800)){	
  		slider_run.style.marginLeft= (i-=960) +"px";
	}else{
		i=0;
		slider_run.style.marginLeft = 0 +"px";
		}
	if(i==(-5760)){
		flag = false;
		}
	if(i==0){
		flag = true;
		}
	
    /*При нажатии на шаг*/
   back.onclick = function(){
   		if(i<=0&&i>(-965)){
		i = 0;
		slider_run.style.marginLeft= i +"px";
		one.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		one.style.backgroundColor = "rgba(102,102,102,0)";
		}
		if(i<(-955)&&i>(-1925)){
		i = (-960);
		slider_run.style.marginLeft= i++ +"px";
		two.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		two.style.backgroundColor = "rgba(102,102,102,0)";
		}
		if(i<(-1915)&&i>(-2885)){
		i = (-1920);
		slider_run.style.marginLeft= i++ +"px";
		three.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		three.style.backgroundColor = "rgba(102,102,102,0)";
		}
		if(i<(-2875)&&i>(-3845)){
		i = (-2880);
		slider_run.style.marginLeft= i++ +"px";
		four.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		four.style.backgroundColor = "rgba(102,102,102,0)";
		}
		if(i<(-3835)&&i>(-4805)){
		i = (-3840);
		slider_run.style.marginLeft= i++ +"px";
		five.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		five.style.backgroundColor = "rgba(102,102,102,0)";
		}
		if(i<(-4795)&&i>(-5770)){
		i = (-4800);
		slider_run.style.marginLeft= i++ +"px";
		six.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		six.style.backgroundColor = "rgba(102,102,102,0)";
			}
		}

	step.onclick = function(){
		if(i<(-3840)&&i>(-4800)){
		i = (-4800);
		slider_run.style.marginLeft= i +"px";
		i--;
		six.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		six.style.backgroundColor = "rgba(102,102,102,0)";
		}
		if(i<(-2880)&&i>(-3840)){
		i = (-3840);
		slider_run.style.marginLeft= i +"px";
		i--;
		five.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		five.style.backgroundColor = "rgba(102,102,102,0)";
		}
		if(i<(-1920)&&i>(-2880)){
		i = (-2880);
		slider_run.style.marginLeft= i +"px";
		i--;
		four.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		four.style.backgroundColor = "rgba(102,102,102,0)";
		}

		if(i<(-955)&&i>(-1920)){
		i = (-1920);
		slider_run.style.marginLeft= i +"px";
		i--;
		three.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		three.style.backgroundColor = "rgba(102,102,102,0)";
		}
   		if(i<=0&&i>(-960)){
		i = (-960);
		slider_run.style.marginLeft= i++ +"px";
		two.style.backgroundColor = "rgba(102,102,102,1)";
		}else{
		two.style.backgroundColor = "rgba(102,102,102,0)";
		}

		}
				/*подкрашивание кружечков при перемотке*/
	/*Первый цвет*/
	if(i>=0&&i>(-960)||i<=(-5760)&&i>(-6720)){
		one.style.backgroundColor = "rgba(102,102,102,1)";
	}else{
		one.style.backgroundColor = "rgba(102,102,102,0)";
	}
	/*второй цвет*/
	if(i<=(-960)&&i>(-1920)){
		two.style.backgroundColor = "rgba(102,102,102,1)";
	}else{
		two.style.backgroundColor = "rgba(102,102,102,0)";
	}
	/*Третий цвет*/
	if(i<=(-1920)&&i>(-2880)){
		three.style.backgroundColor = "rgba(102,102,102,1)";
	}else{
		three.style.backgroundColor = "rgba(102,102,102,0)";
		}
	/*Четвертый*/
	if(i<=(-2880)&&i>(-3840)){
		four.style.backgroundColor = "rgba(102,102,102,1)";
	}else{
		four.style.backgroundColor = "rgba(102,102,102,0)";
		}
	/*пятый*/
	if(i<=(-3840)&&i>(-4800)){
		five.style.backgroundColor = "rgba(102,102,102,1)";
	}else{
		five.style.backgroundColor = "rgba(102,102,102,0)";
		}
		/*Шестой*/
	if(i<=(-4800)&&i>(-5760)){
		six.style.backgroundColor = "rgba(102,102,102,1)";
	}else{
		six.style.backgroundColor = "rgba(102,102,102,0)";
		}

		/*При наведении на кружочки*/
	one.onclick = function(){
	i = 0;
	slider_run.style.marginLeft=i +"px";
	one.style.backgroundColor = "rgba(102,102,102,1)";
	}

     		/*второго*/
	two.onclick = function(){
	i = (-960);
	slider_run.style.marginLeft=i +"px";
	two.style.backgroundColor = "rgba(102,102,102,1)";
		}
 
     		     /*Третьего*/
	three.onclick = function(){
		i = (-1920);
		slider_run.style.marginLeft=i +"px";
		three.style.backgroundColor = "rgba(102,102,102,1)";
	}
     		/*четвертого*/
	four.onclick = function(){
		i = (-2880);
		slider_run.style.marginLeft=i +"px";
		four.style.backgroundColor = "rgba(102,102,102,1)";
	}
     		     		/*пятого*/
	five.onclick = function(){
		i = (-3840);
		slider_run.style.marginLeft=i +"px";
		five.style.backgroundColor = "rgba(102,102,102,1)";
		}

     		     /*шестого*/
	six.onclick = function(){
		i = (-4800);
		slider_run.style.marginLeft=i +"px";
		six.style.backgroundColor = "rgba(102,102,102,1)";
	}
			if(i==(-5760)){
  		clearInterval(go);
  		setTimeout(function(){goAhead(0,true);},200);
  		}
	},4000);
	
}	
