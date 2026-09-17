import React from 'react';


const RemoveFarmerModal = ({
  isOpen = true,
  farmerName = 'Aisha Bello',
  onCancel,
  onConfirmRemove,
  isRemoving = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
    {/*
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
       */}
      <div className="w-full max-w-[350px] rounded-[15px] bg-white p-[30px] text-center shadow-xl">
        {/* Trash Icon */}
        <div className="mx-auto flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[#ffe8e5] text-[#e63227]">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="mt-[25px] mb-[5px] text-[18px] font-bold text-slate-900">
          Remove Farmer?
        </h2>

        {/* Description */}
        <p className="text-[12px] leading-relaxed text-gray-500">
          Are you sure you want to remove <span className="font-medium text-slate-800">{farmerName}</span> from your active farmer list?
        </p>

        {/* Warning Banner */}
        <div className="mt-[25px] flex items-start gap-2.5 rounded-[10px] bg-[#fff2c7] p-[15px] text-left text-[12px] text-amber-950">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/30 text-xs font-bold text-amber-800">
            !
          </div>
          <p className="leading-snug">
            This action will remove farmer from your list, but their loan history and records will be kept safe and will not be deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-[25px] flex gap-[15px]">
          <button
            type="button"
            onClick={onCancel}
            disabled={isRemoving}
            className="w-1/2 rounded-[8px] border border-gray-400 bg-white py-3 text-xs font-medium text-[#444] transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirmRemove}
            disabled={isRemoving}
            className="w-1/2 rounded-[8px] border-none bg-[#e63227] py-3 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#c92820] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1 disabled:opacity-50"
          >
            {isRemoving ? 'Removing...' : 'Remove Farmer'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveFarmerModal;