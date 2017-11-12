



function getData() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://127.0.0.1:8080/data.json', true);
    xhr.onload = function() {
		try { 
			let data = JSON.parse(xhr.responseText);
             console.log(xhr.responseText)
           const div=document.querySelector('div');
            const ul= document.createElement('ul')
             div.appendChild(ul);
			 data.forEach( ({name,model,foto}) =>{
      let li=document.createElement('li');
      ul.appendChild(li); 
      var img=document.createElement('img');
      img.setAttribute('src', foto)
      li.appendChild(img);
      var p =document.createElement('p')
      var p1 =document.createElement('p')
     li.appendChild(p);
     li.appendChild(p1);
     p.textContent= name;
     p1.textContent= model;


      
              
      
                          }
		)} catch (err) {
			alert('JSON is avalided', err)
		}
	}
	xhr.send()
}
 
  
let btn=document.querySelector('input');
btn.addEventListener('click', getData);
