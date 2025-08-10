import React, { useRef } from 'react';

function UploadPdfButton() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle the uploaded PDF file here
      console.log('Selected file:', file.name);
    }
  };

  return (
    <>
      <button
        type="button"
        className="font-medium text-indigo-600 hover:text-indigo-500"
        onClick={handleClick}
      >
        Upload
      </button>
      <input
        type="file"
        accept="application/pdf"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </>
  );
}

export default UploadPdfButton
