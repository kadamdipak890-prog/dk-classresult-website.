const results11 = [
  { name: "KADAM SNEHAL SNEHAL", seat: "D001", class: "11th", marks: 50, total: 50 },
  { name: "KADAM VAISHNAVI ARJUN", seat: "D023", class: "11th", marks: 50, total: 50 },
  { name: "MORE RUSHIKESH KANTILAL", seat: "D002", class: "11th", marks: 17, total: 50 },
  { name: "JADHAV DARSHAN BALU", seat: "D024", class: "11th", marks: 26, total: 50 },
  { name: "KADAM DNYANESHWARI SANDIP", seat: "D003", class: "11th", marks: 49, total: 50 },
  { name: "GAIKWAD SUJIT DATTATRAY", seat: "D025", class: "11th", marks: 9, total: 50 },
  { name: "MADHWAI SIDDHI BHAUSAHEB", seat: "D004", class: "11th", marks: 49, total: 50 },
  { name: "KADAM TANVI SAMADHAN", seat: "D010", class: "11th", marks: 50, total: 50 },
  { name: "GHANGHAV PRADNYA NARAYAN", seat: "D012", class: "11th", marks: 50, total: 50 },
  { name: "KADAM SAMIKSHA DATTATRAY", seat: "D015", class: "11th", marks: 47, total: 50 },
  { name: "BHOKNAL ADESH ATMARAM", seat: "D017", class: "11th", marks: 50, total: 50 },
  { name: "PIMPARKAR VAISHNAVI S.", seat: "D022", class: "11th", marks: 49, total: 50 }
];

function loadResults() {
  const selectedClass = document.getElementById("class").value;
  const section = document.getElementById("result-section");
  const tableBody = document.getElementById("table-body");
  const publish = document.getElementById("publish-time");

  tableBody.innerHTML = "";
  publish.innerHTML = "";
  if (!selectedClass) {
    section.classList.add("hidden");
    return;
  }

  section.classList.remove("hidden");

  let data = [];
  if (selectedClass === "11th") data = results11;

  data.sort((a, b) => b.marks - a.marks);

  const student = data[0];
  document.getElementById("student-name").textContent = student.name;
  document.getElementById("student-class").textContent = student.class;
  document.getElementById("student-seat").textContent = student.seat;

  data.forEach((s, index) => {
    const percentage = ((s.marks / s.total) * 100).toFixed(2);
    const row = `
      <tr>
        <td>Physics</td>
        <td>${s.marks}</td>
        <td>${s.total}</td>
        <td>${percentage}%</td>
        <td>${index + 1}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });

  // 🕒 तारीख आणि वेळ दाखवा
  const now = new Date();
  const date = now.toLocaleDateString('en-IN');
  const time = now.toLocaleTimeString('en-IN');
  publish.innerHTML = `🕒 Result Published on ${date} at ${time}`;
}