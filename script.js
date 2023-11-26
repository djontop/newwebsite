function runCode() {
    const code = document.getElementById('code-editor').value;
    const outputFrame = document.getElementById('output-frame');

    // Clear previous output
    outputFrame.srcdoc = '';

    try {
        // Execute the code in an iframe
        const script = document.createElement('script');
        script.text = code;
        outputFrame.contentDocument.body.appendChild(script);
    } catch (error) {
        // Display any errors in the output frame
        outputFrame.srcdoc = error;
    }
}
