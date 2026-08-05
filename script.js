/* --- 1. Color Palette & Variables (For easier management) --- */
:root {
    --primary-blue: #1a73e8;   /* Vibrant, trustworthy blue */
    --secondary-blue: #0056b3; /* Deeper blue for accents */
    --accent-green: #28a745;    /* For success/action */
    --background-light: #f0f4f8; /* Soft, light background */
    --text-dark: #2c3e50;       /* Dark, professional text */
    --white: #ffffff;
    --shadow-light: rgba(0, 0, 0, 0.1);
}

/* --- 2. Base Body Styles --- */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--background-light);
    color: var(--text-dark);
    line-height: 1.7; /* Increased line height for readability */
    transition: background-color 0.3s;
}

/* --- 3. Header Styling --- */
header {
    background-color: var(--secondary-blue);
    color: white;
    padding: 25px 20px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
    font-weight: 700;
    letter-spacing: 1px;
}

header p {
    margin: 8px 0 0;
    font-size: 1em;
    opacity: 0.9;
}

/* --- 4. Navigation Styling --- */
nav {
    background-color: var(--primary-blue);
    text-align: center;
    padding: 15px 0;
    margin: 25px auto;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 30px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;
    display: block; /* Makes the whole area clickable */
    text-align: center;
}

nav ul li a:hover {
    background-color: var(--primary-blue);
    transform: translateY(-2px); /* Subtle lift effect */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

/* --- 5. Main Layout --- */
main {
    padding: 30px;
    max-width: 1100px;
    margin: 0 auto;
}

.content-section {
    background-color: var(--white);
    padding: 30px;
    margin-bottom: 25px;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    border-top: 4px solid var(--primary-blue); /* Added visual accent */
}

h2 {
    color: var(--secondary-blue);
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
    margin-top: 0;
    font-size: 1.6em;
    font-weight: 600;
}

/* --- 6. Specialized Components --- */

/* Photo Frame Styling */
.photo-frame {
    text-align: center;
    border: 1px solid #ddd;
    padding: 20px;
    background: var(--white);
    border-radius: 8px;
    transition: transform 0.3s;
}

.photo-frame:hover {
    transform: scale(1.02);
}

.photo-frame iframe {
    max-width: 100%;
    height: 350px; /* Slightly taller for better viewing */
    border: none;
    border-radius: 6px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.note {
    margin-top: 15px;
    font-size: 0.9em;
    color: #555;
    font-style: italic;
    padding-left: 10px;
    border-left: 3px solid var(--accent-green);
    background-color: #fffaf0;
}

/* Form Styling for Marks */
.marks-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 25px;
}

.input-group {
    display: flex;
    flex-direction: column;
}

.input-group label {
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--text-dark);
}

.input-group input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s;
}

.input-group input:focus {
    border-color: var(--primary-blue);
    box-shadow: 0 0 5px rgba(26, 115, 232, 0.5);
}

#submitBtn {
    background-color: var(--accent-green);
    color: white;
    padding: 14px 25px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.15em;
    font-weight: bold;
    letter-spacing: 0.5px;
    transition: background-color 0.3s, transform 0.1s;
    box-shadow: 0 4px 8px rgba(40, 167, 69, 0.4);
}

#submitBtn:hover {
    background-color: #1e7e34; /* Darker green on hover */
    transform: translateY(-1px);
}

.marks-display {
    margin-top: 25px;
    padding: 20px;
    border: 2px dashed var(--primary-blue);
    background-color: #eaf5ff; /* Very light blue tint */
    border-radius: 8px;
    text-align: center;
    transition: border-color 0.3s;
}

.marks-display h3 {
    margin-top: 0;
    color: var(--secondary-blue);
    font-size: 1.4em;
}
