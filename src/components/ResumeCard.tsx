const pdfUrl = "/resume.pdf"
export default function ResumeCard() {
  return (
    <div className="grid h-screen place-items-center bg-white">
      <iframe src={pdfUrl} width="100%" height="100%">
    This browser does not support inline PDFs. Please download the PDF to view it: <a href={pdfUrl}>Download PDF</a>
</iframe>
    </div>
  )
};
