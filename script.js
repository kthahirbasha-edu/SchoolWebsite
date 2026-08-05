function displayMarks() {
    // 1. Get data from input fields
    const examNum = document.getElementById('examNumber').value;
    const className = document.getElementById('className').value;
    const studentName = document.getElementById('studentName').value;

    // Basic validation
    if (!examNum ||!className ||!studentName) {
        alert("Please fill in all fields (Exam Number, Class, and Name) to view the marks.");
        return;
    }

    // --- DUMMY DATA SIMULATION ---
    // In a real application, you would fetch this data from your Google Sheet via an API call.
    // For this dummy code, we simulate the output based on the input.
    
    const dummyMarks = generateDummyMarks(examNum, className);

    // 2. Display the results in the designated area
    const outputElement = document.getElementById('marksOutput');
    
    outputElement.innerHTML = `
        <h4>✅ Result Found!</h4>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Exam Number:</strong> ${examNum}</p>
        <p><strong>Class:</strong> ${className}</p>
        <p><strong>Marks Obtained:</strong> ${dummyMarks.score}</p>
        <p><strong>Status:</strong> ${dummyMarks.status}</p>
    `;

    // Optional: Clear the form after successful submission
    document.getElementById('marksOutput').innerHTML =<p>Results displayed successfully!</p>`;
}

function generateDummyMarks(examNo, cls) {
    // Dummy logic: Generate a random score based on the input for demonstration purposes
    const randomScore = Math.floor(Math.random() * 40) + 40; // Generates a score between 40 and 80
    let status = "Pass";
    if (randomScore< 50) {
        status = "Excellent";
    } else if (randomScore< 70) {
        status = "Good";
    } else {
        status = "Needs Improvement";
    }

    return {
        score: randomScore,
        status: status
    };
}

// Optional: Add event listener for Enter key press on the form fields
document.getElementById('examNumber').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        displayMarks();
    }
});
document.getElementById('className').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        displayMarks();
    }
});
document.getElementById('studentName').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        displayMarks();
    }
});
document.getElementById('submitBtn').addEventListener('click', displayMarks);
