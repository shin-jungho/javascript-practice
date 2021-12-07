function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    if (typeof window !== 'undefined'){ alert(current) };
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);