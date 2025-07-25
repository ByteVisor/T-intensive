import html2pdf from 'html2pdf.js';

const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  html2pdf()
    .set({
      margin: 0,
      filename: 'vse-stranitsa.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    })
    .from(document.body)
    .save();
});
