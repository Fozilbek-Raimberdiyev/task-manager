import html2pdf from "html2pdf.js";
import { toDataUrl } from "./images";
export async function generatePdf(pdfContent, pdfName) {
    const promises = Array.from(
        document.querySelectorAll(`${pdfContent} img`)
    ).map(async (img) => {
        img.src = await toDataUrl(img.src);
        console.log(img);
        return img;
    });
    await Promise.all(promises);
    const opt = {
        margin: 1,
        filename: pdfName || "file.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "landscape" },
        pagebreak: {
            mode: "avoid-all",
        },
    };
    html2pdf().set(opt).from(document.querySelector(pdfContent)).save();
}
