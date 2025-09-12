// Data array (निकाल)
const resultData = [
  { RollNo: 101, Name: "Rahul Sharma", Class: "10", Gender: "M", Marks: 450, Percent: 90, Rank: 1, Percentile: 99 },
  { RollNo: 102, Name: "Sneha Patil", Class: "10", Gender: "F", Marks: 440, Percent: 88, Rank: 2, Percentile: 97 },
  { RollNo: 103, Name: "Amit Kadam", Class: "10", Gender: "M", Marks: 430, Percent: 86, Rank: 3, Percentile: 95 },
  { RollNo: 104, Name: "Anjali More", Class: "10", Gender: "F", Marks: 420, Percent: 84, Rank: 4, Percentile: 93 }
];

// टेबल populate function
function displayTable(data) {
    let table = document.getElementById("resultTableBody");
    table.innerHTML = "";
    data.forEach(row => {
        table.innerHTML += `<tr>
            <td>${row.RollNo}</td>
            <td>${row.Name}</td>
            <td>${row.Class}</td>
            <td>${row.Gender}</td>
            <td>${row.Marks}</td>
            <td>${row.Percent}</td>
            <td>${row.Rank}</td>
            <td>${row.Percentile}</td>
        </tr>`;
    });
}

// Initial load
displayTable(resultData);

// Search functionality
document.getElementById("searchBox").addEventListener("input", function() {
    let query = this.value.toLowerCase();
    let filtered = resultData.filter(row =>
        row.Name.toLowerCase().includes(query) || row.RollNo.toString().includes(query)
    );
    displayTable(filtered);
});

// Class filter
document.getElementById("classFilter").addEventListener("change", function() {
    let selectedClass = this.value;
    let filtered = resultData.filter(row =>
        selectedClass === "" || row.Class === selectedClass
    );
    displayTable(filtered);
});