import React, { useState, useRef } from 'react';

export default function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Fayl formatini tekshirish
  const isValidFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    const maxSize = 10 * 1024 * 1024; // 10MB
    const minWidth = 300;
    const minHeight = 300;

    if (!validTypes.includes(file.type)) {
      alert('Faqat JPG, PNG formatidagi fayllar qabul qilinadi');
      return false;
    }

    if (file.size > maxSize) {
      alert('Fayl hajmi 10MB dan oshmasligi kerak');
      return false;
    }

    return true;
  };

  // Rasm o'lchamini tekshirish
  const checkImageDimensions = (file) => {
    return new Promise((resolve) => {
      const img = new Image();
      const url = URL.createObjectURL(file);
      
      img.onload = () => {
        URL.revokeObjectURL(url);
        if (img.width < 300 || img.height < 300) {
          alert('Rasm o\'lchami kamida 300x300 piksel bo\'lishi kerak');
          resolve(false);
        } else {
          resolve(true);
        }
      };
      
      img.onerror = () => {
        URL.revokeObjectURL(url);
        resolve(false);
      };
      
      img.src = url;
    });
  };

  // Fayllarni qayta ishlash
  const handleFiles = async (files) => {
    const fileArray = Array.from(files);
    const validFiles = [];

    for (const file of fileArray) {
      if (isValidFile(file)) {
        const isDimensionValid = await checkImageDimensions(file);
        if (isDimensionValid) {
          validFiles.push(file);
        }
      }
    }

    if (validFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...validFiles]);
    }
  };

  // Drag and drop hodisalari
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  // Fayl tanlash tugmasi
  const handleFileSelect = (e) => {
    const files = e.target.files;
    handleFiles(files);
  };

  // Faylni o'chirish
  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full mx-auto px-6 pt-14 bg-white">
      {/* Upload Area */}
      <div
        className={`
          relative border-2  border-dotted  rounded-[16px] p-8 text-center transition-all duration-200
          ${isDragging 
            ? 'border-blue-400 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
        `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/jpeg,image/jpg,image/png"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        {/* Upload tugmasi */}
        <button
          onClick={() => fileInputRef.current?.click()}
          className="hidden lg:grid lg:mx-auto bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-[16px] font-medium transition-colors duration-200 mb-4"
        >
          Выберите файлы
        </button>
         <button
          onClick={() => fileInputRef.current?.click()}
          className="lg:hidden text-[48px] px-6 py-3 rounded-[16px] transition-colors duration-200 mb-4"
        >
          +
        </button>
        
        {/* Ma'lumot matni */}
        <div className=" hidden lg:block text-[18px] leading-[24px] space-y-1">
          <p>или перетащите их сюда</p>
          <p>(JPG, PNG, до 10 МБ, не ниже 300х300)</p>
        </div>
      </div>

      {/* Yuklangan fayllar ro'yxati */}
      {uploadedFiles.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="text-sm font-medium text-gray-700">
            Yuklangan fayllar ({uploadedFiles.length})
          </h3>
          {uploadedFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 truncate max-w-40">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}