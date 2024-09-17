const lookUp = {
  0: 0
}

function fib (n) { 
  if (n <= 1) {
    return n;
  }

  if (!lookUp[n]) {
    lookUp[n] = fib(n-1) + fib(n-2);
  }

  return lookUp[n];
}

function init() {
  const ARGV = process.argv.slice(2);
  if(ARGV.length > 0) {
    console.log(fib(parseInt(ARGV[0]))); 
  }
}

init();