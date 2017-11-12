const button=document.getElementsByName('button');
button[0].addEventListener('click', getCurrentTime)




function getCurrentTime() { 
	const inp1=document.getElementsByName('years');
var a = (+inp1[0].value)
const inp2=document.getElementsByName('months');
var b = ((+inp2[0].value)-1)
var now = new Date(a , b );
   var arr=[];
 function check (a, b) { 
 for (var i=0; i<=31 ; i++) { 
 var q = new Date(a , b , i);
 if (q.getMonth()==now.getMonth()) {
 arr.push(i)
  
 }
  }
 }
var day=now.getDay();
  function x() { 
     switch(day) { 
         case 0 : 
         arr.unshift('' ,'' ,'' ,'' ,'' ,'' )
         break;
          case 1 : 
         arr.unshift()
         break;
      case 2 : 
         arr.unshift('')
          break;  
       case 3 : 
          arr.unshift('','')
         break; 
       case 4 : 
         arr.unshift('','','')
          break; 
        case 5 : 
          arr.unshift('','','','')
          break; 
      case 6 : 
          arr.unshift('','','','','')
          break; 
      default :
        return 
         break; 
                }  
  }
   check (a, b);
   x();  
console.log(arr)
 function append() {
var td = document.querySelectorAll('td');

 for (i=0 ; i<arr.length; i++) {
 td[i].textContent=`${arr[i]}`
 }
 }
append()
}
