import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

export const generateToPDF = () => {
    const input = document.getElementById('generated_test');
    if (input) {
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const doc = new jsPDF();
                doc.addImage(imgData, 'JPEG', 0, 0, 0, 0);
                doc.save();
            })
    }
}
