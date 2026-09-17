import React, { useRef, useState } from 'react'
import GalleryAdd from '../../assets/GalleryAdd.svg'

const UploadFile = ({ onFileSelect }) => {
    const fileInputRef = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (!file) return

        // Validation: Type Check
        const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']
        if (!allowedTypes.includes(file.type)) {
            alert('Only JPG, PNG, and PDF files are allowed.')
            return
        }

        // Validation: Size Check (Max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File must be 5MB or less.')
            return
        }

        setSelectedFile(file)

        // Generate local preview URL for images
        if (file.type.startsWith('image/')) {
            setPreviewUrl(URL.createObjectURL(file))
        } else {
            setPreviewUrl(null) // For PDF documents
        }

        // Optional callback to pass the file object up to a parent form state
        if (onFileSelect) {
            onFileSelect(file)
        }
    }

    const handleRemove = () => {
        setSelectedFile(null)
        setPreviewUrl(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
        if (onFileSelect) {
            onFileSelect(null)
        }
    }

    return (
        <div className='w-full'>
            <input
                type='file'
                ref={fileInputRef}
                onChange={handleFileChange}
                accept='.jpg,.jpeg,.png,.pdf'
                className='hidden'
            />

            {!selectedFile ? (
                /* Default Dropzone View */
                <div className='border-2 border-dashed border-gray-200 hover:border-gray-300 transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gray-50/50'>
                    <div className='w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center mb-3 shadow-xs'>
                        <img src={GalleryAdd} alt="" />
                    </div>

                    <p className='text-xs font-semibold text-gray-700 leading-snug'>
                        Click to upload or drag and drop
                    </p>
                    <p className='text-[11px] text-gray-400 mt-1 mb-4'>
                        JPG, PNG or PDF (Max 5MB)
                    </p>

                    <button
                        type='button'
                        onClick={() => fileInputRef.current.click()}
                        className='px-4 py-2 rounded-xl border border-gray-300 bg-white text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer shadow-xs'
                    >
                        Choose File
                    </button>
                </div>
            ) : (
                /* Preview / Selected File View */
                <div className='border border-gray-200 rounded-2xl p-4 flex items-center justify-between bg-white shadow-xs'>
                    <div className='flex items-center gap-3 min-w-0'>
                        {previewUrl ? (
                            <img
                                src={previewUrl}
                                alt='Preview'
                                className='w-12 h-12 rounded-xl object-cover border border-gray-100 shrink-0'
                            />
                        ) : (
                            <div className='w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold shrink-0'>
                                PDF
                            </div>
                        )}
                        <div className='flex flex-col min-w-0'>
                            <span className='text-xs font-semibold text-gray-900 truncate max-w-[140px]'>
                                {selectedFile.name}
                            </span>
                            <span className='text-[11px] text-gray-400'>
                                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                            </span>
                        </div>
                    </div>

                    <button
                        type='button'
                        onClick={handleRemove}
                        className='text-xs text-red-500 hover:text-red-700 font-semibold cursor-pointer p-1 transition-colors'
                    >
                        Remove
                    </button>
                </div>
            )}
        </div>
    )
}

export default UploadFile