
import { Download, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadResume = () => {
  const handleDownload = () => {
    // In a real scenario, you would link to your actual resume file
    const resumeUrl = '/resume.pdf'; // You'll need to add your resume file to the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sarah_Johnson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-bubble-pink/10 via-aqua-blue/10 to-lemon-yellow/10 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="card-hover bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-dashed border-bubble-pink/30 dark:border-purple-400/30">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-bubble-pink to-aqua-blue dark:from-purple-500 dark:to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bubblegum text-3xl font-bold bubble-text-gradient mb-2">
                Get My Resume! 📄
              </h3>
              <p className="font-comic text-gray-600 dark:text-gray-300 text-lg">
                Want to know more about my journey? Download my detailed resume!
              </p>
            </div>
            
            <Button
              onClick={handleDownload}
              className="bounce-button bg-gradient-to-r from-bubble-pink to-aqua-blue dark:from-purple-600 dark:to-blue-600 hover:from-hot-pink hover:to-bubble-pink dark:hover:from-purple-700 dark:hover:to-blue-700 text-white font-comic font-bold text-lg px-8 py-4 rounded-full border-none shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="font-comic text-sm text-gray-500 dark:text-gray-400 mt-4">
              PDF • Updated December 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadResume;
