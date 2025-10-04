/**
 * Enhanced print functionality for CV download
 */
export const downloadCV = () => {
  try {
    // Add a small delay to ensure styles are loaded
    setTimeout(() => {
      // Set document title for PDF filename
      const originalTitle = document.title;
      document.title = 'David-Nekovar-CV';
      
      // Trigger print dialog
      window.print();
      
      // Restore original title after print
      setTimeout(() => {
        document.title = originalTitle;
      }, 1000);
      
    }, 100);
  } catch (error) {
    console.error('Print function failed:', error);
    // Fallback: show alert with instructions
    alert('Please use your browser\'s print function (Ctrl+P or Cmd+P) and select "Save as PDF"');
  }
};

/**
 * Alternative download method using browser's print with better error handling
 */
export const printCV = () => {
  // Check if we're in browser environment
  if (typeof window !== 'undefined') {
    try {
      // Ensure page is fully loaded
      if (document.readyState === 'complete') {
        downloadCV();
      } else {
        // Wait for page to load
        window.addEventListener('load', downloadCV);
      }
    } catch (error) {
      console.error("Error during print:", error);
    }
  }
};

/**
 * Show manual print instructions as fallback
 */
const showPrintInstructions = () => {
  const instructions = `
To download this CV as PDF:

1. Press Ctrl+P (Windows) or Cmd+P (Mac)
2. Select "Save as PDF" as destination
3. Choose "More settings" if needed
4. Set margins to "Minimum"
5. Click "Save"

The page is optimized for A4 printing.
  `.trim();
  
  alert(instructions);
};
