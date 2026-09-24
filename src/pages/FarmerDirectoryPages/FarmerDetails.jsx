import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoanHistory from '../../component/FarmerDirectory/LoanHistory';
import Dashboard_Header from '../../component/Dashboard/Dashboard_Header';
import Buton from '../../component/Dashboard/Buton';
import EditFarmer from '../../assets/EditFarmer.svg';
import RemoveFarmer from '../../assets/RemoveFarmer.svg';
import FarmerCard from '../../component/FarmerDirectory/FarmerCard';
import FarmLocationPreview from '../../component/FarmerDirectory/FarmLocationPreview';
import Performance from '../../component/FarmerDirectory/Performance';
import RemoveFarmerModal from '../../component/FarmerDirectory/Removing/RemoveFarmerModal';
import FarmerRemovedModal from '../../component/FarmerDirectory/Removing/FarmerRemovedModal';

const FarmerDetails = () => {
  const navigate = useNavigate();
  const {farmerId} = useParams();

  // Modal Flow States
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  // Handle Remove Logic
  const handleConfirmRemove = async () => {
    setIsRemoving(true);

    try {
      // If you have an API call, await it here:
      // await deleteFarmer(farmerId);
      console.log(`Removing farmer with ID: ${farmerId}`);
      setIsRemoving(false);
      setIsConfirmOpen(false);
      setIsSuccessOpen(true); // Step 2: Show success modal
    } catch (error) {
      console.error('Failed to remove farmer:', error);
      setIsRemoving(false);
    }
  };

  const handleFinish = () => {
    setIsSuccessOpen(false);
    navigate('/directory'); // Return to farmer list
  };

  return (
    <div className='flex flex-col gap-5 relative'>
      {/* Breadcrumb Navigation */}
      <nav className='flex items-center gap-2 text-xs font-["Manrope",sans-serif] font-medium text-gray-400'>
        <Link to='/directory' className='hover:text-gray-700 transition-colors'>
          Farmer Directory
        </Link>
        <span>&gt;</span>
        <span className='text-gray-900 font-semibold'>Farmer Details</span>
      </nav>

      {/* Header Actions */}
      <div className='lg:flex lg:justify-between lg:items-center'>
        <Dashboard_Header
          Greeting='Farmer Details'
          sub='View and manage farmer information, loan history and performance'
        />
        <div className='flex items-center justify-center gap-2 mt-3 lg:mt-0'>
          <Buton 
            label='Edit Farmer' 
            icon={EditFarmer} 
            onClick={() => navigate(`/directory/edit/${farmerId}`)} 
          />
          <Buton
            label='Remove Farmer'
            icon={RemoveFarmer}
            variant='outline'
            className='text-[rgba(217,45,32,1)]'
            onClick={() => setIsConfirmOpen(true)}
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className='mt-5 grid grid-cols-1 items-stretch gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]'>
        {/* Left Column */}
        <div className='flex flex-col gap-4 h-full'>
          <FarmerCard />
          <div className='flex flex-1 flex-col min-h-0 w-full bg-white border border-[#E2E8F0] rounded-2xl p-4 sm:p-6 shadow-sm box-border'>
            <div className='flex items-center justify-between pb-4 border-b border-[#E2E8F0] shrink-0'>
              <Dashboard_Header Name='Loan History' />
              <Buton label='View All Farmers' />
            </div>
            <div className='flex-1 overflow-y-auto min-h-0 pt-4'>
              <LoanHistory />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className='flex flex-col gap-4 h-full'>
          <FarmLocationPreview />
          <div className='flex-1 flex flex-col'>
            <Performance />
          </div>
        </div>
      </div>

      {/* 1. Confirmation Modal */}
      <RemoveFarmerModal
        isOpen={isConfirmOpen}
        farmerName="Aisha Bello"
        isRemoving={isRemoving}
        onCancel={() => setIsConfirmOpen(false)}
        onConfirmRemove={handleConfirmRemove}
      />

      {/* 2. Success Modal */}
      <FarmerRemovedModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        onBackToFarmers={handleFinish}
      />
    </div>
  );
};

export default FarmerDetails;