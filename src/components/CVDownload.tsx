import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Download, FileText, File, FileCode, ChevronDown } from "lucide-react";

const cvFiles = [
  {
    name: "PDF",
    format: "pdf",
    icon: FileText,
    description: "Professional PDF format",
    filename: "2025-09-CV-David-Nekovar.pdf"
  },
  {
    name: "MD",
    format: "md", 
    icon: FileCode,
    description: "Markdown source",
    filename: "2025-09-CV-David-Nekovar.md"
  }
];

interface CVDownloadProps {
  variant?: "default" | "hero" | "header";
  showAllFormats?: boolean;
}

const CVDownload = ({ variant = "default", showAllFormats = true }: CVDownloadProps) => {
  const defaultCV = cvFiles[0]; // PDF is default
  
  const downloadCV = (filename: string) => {
    // Track CV download event
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('cv_download', {
        filename: filename,
        format: filename.split('.').pop(),
        event_category: 'download_interaction'
      });
    }
    
    const link = document.createElement('a');
    link.href = `/_CV/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (variant === "header") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            CV
            <ChevronDown className="w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {cvFiles.map((file) => (
            <DropdownMenuItem 
              key={file.format}
              onClick={() => downloadCV(file.filename)}
              className="flex items-center gap-2"
            >
              <file.icon className="w-4 h-4" />
              <div className="flex flex-col">
                <span className="font-medium">{file.name}</span>
                <span className="text-xs text-muted-foreground">{file.description}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  if (variant === "hero") {
    return (
      <Button
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
        onClick={() => downloadCV(defaultCV.filename)}
      >
        <Download className="mr-2 w-4 h-4" />
        Download CV
      </Button>
    );
  }

  // Default variant
  return (
    <Button
      className="btn-hero group"
      onClick={() => downloadCV(defaultCV.filename)}
    >
      <Download className="mr-2 w-4 h-4" />
      Download CV
    </Button>
  );
};

export default CVDownload;
