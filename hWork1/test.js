
function pow( a, n) {
    var result = a;
   
    for (var i = 1; i < n; i++){
        result *= a
    }
    return result;

}
 var a = prompt('a', '');
 var n = prompt('n', '');

console.log(pow(a, n)) ;




function login () {

}
 var arr = [];

  for ( i = 0; i < 1; i++){
       arr[i] = prompt('Enter name')
  }
  for (i = 0; i < arr.length; i++){
      alert (arr[i]);
  }



 var n = prompt('who are you', ' ');
 if (n == arr[i]){
 alert ('You are ' + n );
  }else{
     alert('I do not know who you are')
 }