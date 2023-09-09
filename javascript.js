const qrForm = document.getElementById("qr-form");
const qrCodeContainer = document.getElementById("qr-code-container");
const qrCodeImg = document.getElementById("qr-code");
const downloadLink = document.getElementById("download-link");

qrForm.addEventListener("submit", generateQRCode);

function generateQRCode(event) {
    event.preventDefault();

    const data = document.getElementById("data").value;
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const format = document.getElementById("format").value;
    const qrColor = document.getElementById("qr-color").value;
    const bgColor = document.getElementById("bg-color").value;

    // Create a QR code API URL based on user inputs
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        data
    )}&size=${width}x${height}&format=${format}&color=${qrColor}&bgcolor=${bgColor}`;

    // Set the src attribute of the QR code image
    qrCodeImg.src = apiUrl;

    // Show the QR code and download button
    qrCodeContainer.style.display = "block";
    downloadLink.style.display = "block";

     // Update the download link
     const fileName = `qrcode.${format}`;
     downloadLink.href = apiUrl;
     downloadLink.download = fileName;
}
