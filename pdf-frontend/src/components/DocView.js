import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFDocument, StandardFonts } from "pdf-lib";

function DocView() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="modified" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
export default DocView;
