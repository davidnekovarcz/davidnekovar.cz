import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PrintTest = () => {
  const testPrint = () => {
    console.log('Print button clicked!');
    
    // Test if window.print exists
    if (typeof window !== 'undefined' && window.print) {
      console.log('window.print is available');
      try {
        window.print();
        console.log('window.print() called successfully');
      } catch (error) {
        console.error('Error calling window.print():', error);
        alert('Print failed. Please use Ctrl+P (Cmd+P on Mac) to print manually.');
      }
    } else {
      console.error('window.print is not available');
      alert('Print function not available. Please use Ctrl+P (Cmd+P on Mac) to print manually.');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 no-print">
      <Button 
        onClick={testPrint}
        className="bg-red-500 hover:bg-red-600 text-white shadow-lg"
        size="sm"
      >
        <Download className="w-4 h-4 mr-2" />
        Test Print
      </Button>
    </div>
  );
};

export default PrintTest;
