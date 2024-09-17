const lookUp = {
  0: 0
}

function fib (n) { 
  if (n <= 1) {
    return n;	
 }
 if(lookUp[n]) {
    return lookUp[n];
 }
 lookUp[n] = fib(n-1) + fib(n-2);
 return lookUp[n];
}
