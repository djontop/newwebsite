function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputFrame = document.getElementById('output-frame');

    // Clear previous output
    outputFrame.contentDocument.body.innerHTML = '';

    try {
        // Execute the code in an iframe
        const script = outputFrame.contentDocument.createElement('script');
        script.text = code;
        outputFrame.contentDocument.body.appendChild(script);
    } catch (error) {
        // Display any errors in the output frame
        outputFrame.contentDocument.body.innerText = error;
    }
}
