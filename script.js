function calculate() {
  const internal = document.getElementById("internalInput").value;
  const sem = document.getElementById("semInput").value;
  const practical = document.getElementById("practicalsInput").value;
  let result;

  if (practical === 0) {
    result = internal + ((sem * 2) / 3);
  } else{
    result = internal + ((sem + practicals) / 2.5);
  }

  document.getElementById("result").textContent =
    "Estimated GPA is: " + result;
}
