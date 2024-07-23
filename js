const pickupLines = [
  // ... Your pickup lines here
];

try {
  function generateRizz() {
    const line = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    const resultElement = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');
    resultElement.textContent = line;
    copyButton.style.display = 'inline-block';
  }

  function copyToClipboard() {
    const resultElement = document.getElementById('result');
    navigator.clipboard.writeText(resultElement.textContent).then(function() {
      alert('Copied to clipboard');
    }, function() {
      alert('Failed to copy');
    });
  }
} catch (error) {
  console.error("Error:", error);
}
