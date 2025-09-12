async function loadResult(e) {
  e.preventDefault();
  const roll = document.getElementById("roll").value;
  const response = await fetch('data.json');
  const students = await response.json();
  const student = students.find(s => s.roll === roll);
  const resultDiv = document.getElementById("result");

  if(student){
    resultDiv.innerHTML = `
      <h2>निकाल</h2>
      <table>
        <tr><th>रोल नंबर</th><td>${student.roll}</td></tr>
        <tr><th>नाव</th><td>${student.name}</td></tr>
        <tr><th>क्लास</th><td>${student.class}</td></tr>
        <tr><th>गुण</th><td>${student.marks}</td></tr>
        <tr><th>टक्केवारी</th><td>${student.percentage}%</td></tr>
        <tr><th>रँक</th><td>${student.rank}</td></tr>
        <tr><th>लिंग</th><td>${student.gender}</td></tr>
      </table>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">रोल नंबर सापडला नाही</p>`;
  }
}

document.getElementById("resultForm").addEventListener("submit", loadResult);