import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function PDFDownloadButton() {
  const handleDownloadPDF = async () => {
    try {
      // Show loading state
      const button = document.getElementById('pdf-download-btn');
      const originalText = button.innerHTML;
      button.innerHTML = '<span class="animate-pulse">Generating PDF...</span>';
      button.disabled = true;

      // Get the main content area (excluding header and footer)
      const contentElement = document.querySelector('main');
      
      if (!contentElement) {
        throw new Error('Content element not found');
      }

      // Configure html2canvas options for better quality
      const canvas = await html2canvas(contentElement, {
        scale: 2, // Higher resolution
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: contentElement.scrollWidth,
        windowHeight: contentElement.scrollHeight,
        onclone: (clonedDoc) => {
          // Ensure all images are loaded in the cloned document
          const images = clonedDoc.querySelectorAll('img');
          images.forEach(img => {
            if (!img.complete) {
              img.onload = () => {
                // Force redraw after image loads
                img.style.display = 'none';
                img.offsetHeight; // Trigger reflow
                img.style.display = '';
              };
            }
          });
        }
      });

      // Calculate PDF dimensions
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;

      // Add first page
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Generate filename with current date
      const date = new Date().toISOString().split('T')[0];
      const filename = `career-success-guide-${date}.pdf`;

      // Save the PDF
      pdf.save(filename);

      // Restore button state
      button.innerHTML = originalText;
      button.disabled = false;

    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Restore button state and show error
      const button = document.getElementById('pdf-download-btn');
      button.innerHTML = '<span class="text-red-600">Error! Try again</span>';
      button.disabled = false;
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
      }, 3000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999] md:bottom-8 md:right-8">
      <button
        id="pdf-download-btn"
        onClick={handleDownloadPDF}
        className="group relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 md:px-6 md:py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm min-w-[120px] md:min-w-[180px]"
        title="Download complete guide as PDF"
      >
        <Download className="w-4 h-4 md:w-6 md:h-6 group-hover:animate-bounce flex-shrink-0" />
        <span className="font-semibold text-xs md:text-sm md:text-base">Download PDF</span>
        
        {/* Tooltip - hidden on mobile */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block">
          Download entire guide as PDF
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-ping"></div>
      </button>
    </div>
  );
}

export default PDFDownloadButton;
