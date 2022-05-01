function guess() {
  const message = document.getElementById("your-result");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x > 10) throw "Number is between 1- 10";
    if (x < 1) throw "Number is between 1- 10";
    if (x < 7) throw "Too low";
    if (x > 7) throw "too high";
    if (x == 7) throw "YOU WIN";
  } catch (err) {
    message.innerHTML = "Result: " + err;
  } finally {
    document.getElementById("demo").value = "";
  }
}
