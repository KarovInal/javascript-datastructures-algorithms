  const fib = n => (n < 2) ? n : fib(n - 1) + fib(n - 2);

  function memoize(fn) {
    const cash = {};

    return function(...args) {
      if (cash[args]) {
        console.log('This value from cash!');
        return cash[args];
      }

      const result = fn.apply(this, args);
      cash[args] = result;
      console.log('This value evaluates now'); 
      return result;
    }
  }   

  const fastFib = memoize(fib);
