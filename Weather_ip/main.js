
function status(response) {
	if(response.status!== 200) { console.log('Looks like there was a problem. Status Code: ' + response.status);
	     return new Error(response.statusText);}
	     else { return Promise.resolve(response);
	                                  }
}

function getJson(response) {
	 return response.json();
}


function json(data) { var vata=data;
	                 console.log(vata)
	                  console.log(vata.name);
	                   var main=vata.main
	                   console.log(main); 
	                   var time=vata.sys
	                   var sineSet= new Date(time.sunrise*1000)
            var         minuteSet= sineSet.getHours()
              var       hoursSet=sineSet.getMinutes();
                         var sineS= new Date(time.sunset*1000)
            var         minuteS= sineS.getHours()
              var       hoursS=sineS.getMinutes();
                        
	              


	                  
 var p=document.querySelectorAll('p');             
p[0].innerHTML=`City: ${vata.name}`;
p[1].innerHTML=`Temp: ${main.temp}`;
p[2].innerHTML=`Hummipt: ${main.humidity}`;
p[3].innerHTML=`SunRise: ${minuteSet}^${hoursSet}`;
p[4].innerHTML=`SunRise: ${minuteS}^${hoursS}`;





	             }
function getData() {
	fetch('http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&APPID=8c82b801777b6c304cda2164c374aff5',{method: 'get'})
	 .then(status)
	  .then(getJson) 
      .then( json )
	   	  		
	 }

let btn=document.querySelector('input');
btn.addEventListener('click', getData);
