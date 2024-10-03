// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // collect input values
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2>Resume</h2>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <p><strong>Education:</strong> <span contenteditable="true">${education}</span></p>
        <p><strong>Experience:</strong> <span contenteditable="true">${experience}</span></p>
        <p><strong>Skills:</strong> <span contenteditable="true">${skills}</span></p>
    `;

    // Display the generated resume
    resumeDisplayElement.innerHTML = resumeHTML;
});