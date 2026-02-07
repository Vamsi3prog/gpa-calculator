function calculate() {
  const internal = parseFloat(document.getElementById("internalInput").value);
  const sem = parseFloat(document.getElementById("semInput").value);
  const practical = parseFloat(document.getElementById("practicalsInput").value);

  let result;

  if (practical === 0) {
    result = internal + ((sem * 2) / 3);
  } else {
    result = internal + ((sem + practical) / 2.5);
  }

  document.getElementById("result").textContent =
    "Estimated GPA is: " + result;
}
