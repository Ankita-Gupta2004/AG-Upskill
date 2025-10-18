// src/utils/pdfUtils.js

export function getSubjectKey(subjectName) {
  return subjectName
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export function getFileKey(title) {
  if (title === "Syllabus") return "syllabus";
  if (title.startsWith("Unit")) {
    const unitNum = title.split(" ")[1];
    return `unit${unitNum}`;
  }
  return title.toLowerCase().replace(/\s+/g, "_");
}

export function openPdf(subjectName, title) {
  const subjectKey = getSubjectKey(subjectName);
  const fileKey = getFileKey(title);
  const pdfUrl = `/pdf/${encodeURIComponent(subjectKey + "_" + fileKey + ".pdf")}`;

  window.open(pdfUrl, "_blank");
}


export function downloadPdf(subjectName, title) {
  const subjectKey = getSubjectKey(subjectName);
  const fileKey = getFileKey(title);
  const pdfUrl = `/pdf/${subjectKey}_${fileKey}.pdf`;

  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = `${subjectKey}_${fileKey}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
