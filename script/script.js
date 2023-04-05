function changeValue()
{
  const input = document.getElementById('input');
  const result = document.getElementById("result");
  var output = input.value * 1800;
  result.innerText = output;
}
