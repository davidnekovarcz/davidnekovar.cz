const PrintInstructions = () => {
  return (
    <div className="hidden print:block bg-gray-50 border border-gray-200 p-4 mb-6 rounded-lg">
      <h3 className="font-semibold text-gray-800 mb-2">📄 David Nekovář - CV</h3>
      <div className="text-sm text-gray-600 space-y-1">
        <div><strong>Email:</strong> nekovar.david@gmail.com</div>
        <div><strong>Phone:</strong> +420 728 234 648</div>
        <div><strong>LinkedIn:</strong> linkedin.com/in/dave-nekovar</div>
        <div><strong>Location:</strong> Prague, Czech Republic</div>
        <div><strong>Website:</strong> davidnekovar.cz</div>
      </div>
      <div className="text-xs text-gray-500 mt-3 italic">
        Generated from davidnekovar.cz • Last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default PrintInstructions;

