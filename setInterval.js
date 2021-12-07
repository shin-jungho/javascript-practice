function printNumbers(from, to) {
  const current = from;

  let timerId = setInterval(function() {
    if(typeof window !== undefined) { alert(current) };
    if (current == to) {
      clearInterval(timerId);
    }

    current++;
  }, 1000);
}

printNumbers(1, 5)