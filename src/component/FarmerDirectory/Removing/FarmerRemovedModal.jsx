import React from 'react';

const FarmerRemovedModal = ({
  isOpen = true,
  onClose,
  onBackToFarmers,
}) => {
  if (!isOpen) return null;

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
    {/*
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
       */}
<div className="w-full max-w-[320px] rounded-[20px] bg-white p-[30px_20px_20px] text-center shadow-xl">
        {/* Icon */}
        <div className="mx-auto mb-[25px] flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#a8d8bd] text-4xl select-none">
          👍
        </div>

        {/* Title */}
        <h2 className="mb-2 text-base font-bold text-slate-900">
          Farmer Removed Successfully
        </h2>

        {/* Description */}
        <p className="mb-5 text-[11px] leading-[1.5] text-[#666]">
          The farmer has been removed from your list, but their loan history and
          records will be kept safe and will not be deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-1/2 rounded-lg border border-[#777] bg-white py-2.5 text-[11px] font-medium text-[#444] transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            Close
          </button>

          <button
            type="button"
            onClick={onBackToFarmers}
            className="w-1/2 rounded-lg border border-transparent bg-[#286044] py-2.5 text-[11px] font-medium text-white transition-colors hover:bg-[#204e37] focus:outline-none focus:ring-2 focus:ring-[#286044] focus:ring-offset-1"
          >
            Back to Farmers
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmerRemovedModal;