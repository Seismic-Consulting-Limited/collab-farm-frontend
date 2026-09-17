import React from 'react'
import { useState } from 'react'
import UploadingModal from './UploadingModal'
import { useNavigate } from 'react-router-dom'
import { ProgressBar } from './ProgressBar'
import UploadPill from './UploadPill'
import { Header } from '../UserFlow/Header'
import DocumentUpload from '../../assets/DocumentUpload.svg'
import Vector from '../../assets/Vector.svg'
import { Submit_Bttn } from '../UserFlow/Submit_Bttn'
import Backbttn from '../UserFlow/Backbttn'
import { Issues } from '../UserFlow/Issues' 
import { Link } from 'react-router-dom'
import UploadedPill from './UploadedPill' 
{/*
    import { Backbttn } from '../Backbttn'
    */}
    const UploadCred_form = () => {
const [isCertUploading, setIsCertUploading] = useState(false)
const [certProgress, setCertProgress] = useState(0)

const [isAddressUploading, setIsAddressUploading]= useState(false)
const [addressProgress, setAddressProgress] =useState(0)
      
      const [certFile, setCertFile] =useState(null);
      const [addressFile, setAddressFile] =useState(null);
      
      const allowedTypes = [ 'application/pdf']
      const handleCertFileChange = (file) => {
        if (!allowedTypes.includes(file.type)) {
            alert('PDF files are not allowed.')
            return
        }

        setIsCertUploading(true)
  setCertProgress(0)

  const timer = setInterval(() => {
    setCertProgress((prev) => {
      // Check if we reached the top
      if (prev >= 100) {
        clearInterval(timer)
        setIsCertUploading(false)
        setCertFile(file) // Flips to UploadedPill!
        return 100
      }
      return prev + 10 // Increase by 10% each tick
    })
  }, 100) // Ticks every 100ms
}
      
      
      const allowedAddressTypes = ['image/jpeg', 'image/png']
      const handleAddressFileChange = (file) => {
        if (!allowedAddressTypes.includes(file.type)) {
            alert('Only JPG and PNG files are allowed.')
            return
        }
        setIsAddressUploading(true)
setAddressProgress(0)
const timer =setInterval(()=>{
 setAddressProgress((prev)=>{
   if(prev >= 100){
    clearInterval(timer)
    setIsAddressUploading(false)
    setAddressFile(file);
return 100
   }
   return prev + 10
 })
},100

)
      }
    
      const navigate = useNavigate()
      const handleContinue = () => {
    if (!certFile || !addressFile) {
      alert('Please upload both documents before continuing.');
      return
    }
    navigate('/Contact_info');
  };

  return (
    <div className='w-full flex flex-col gap-1'>
      <ProgressBar totalSteps='3' currentStep='2' className={'gap-[12px]'} word1='Step' fu='of' progress='60%' />
      
      <Header title='Upload Credentials' subtitle='Upload your documentation' />
      
      <div className='flex flex-col gap-4'>
        

          {isCertUploading ?(
            <UploadingModal progress={certProgress} remove={()=> setCertFile(null)}/>
          ) :
          !certFile ? ( 
            
            <UploadPill 
            onFileSelect={handleCertFileChange}
            type='.Pdf Only'
            upload={DocumentUpload} 
            secondicon={Vector} 
            progress='25' 
            fileName='Uploading Document.....' 
            Label='Registration Certificate' 
            sublabel='(Official government issue license) *' 
            />
          ) : (
            <UploadedPill  onRemove={()=> setCertFile(null)}
            file={certFile} fileName1={certFile.name} fileSize={certFile.size} Label='Registration Certificate' sublabel = '(Official government issue license) *'/>
          )}
        
        {isAddressUploading ? (
<UploadingModal progress={addressProgress} remove={()=> setAddressFile(null)}/>
        ) :
        !addressFile ? (
          <UploadPill 
          onFileSelect={handleAddressFileChange}
          type='.png, .jpg'
          upload={DocumentUpload} 
          secondicon={Vector} 
          progress='25' 
          fileName='Uploading Document.....' 
          Label='Proof of Address' 
          sublabel='(Utility bill) *'
        />)
         :
         (<UploadedPill  onRemove={()=> setAddressFile(null)}
 file={addressFile} fileName1={addressFile.name} fileSize={addressFile.size} Label='Proof of Address' sublabel = '(Utility bill) *'/>)}
        
      </div>

      {/* Buttons side-by-side: Back takes fixed/compact width, Continue takes remaining space */}
      <div className='flex items-center gap-4 w-full'>
        <div className='w-1/3'>
        {/*
          <Backbttn />
         */}
        <Link to='/Onboarding_BasicInfo'>
        <Backbttn />
        </Link>
        </div>
        <div className='w-2/3'>
        
          <Submit_Bttn tag='Continue' className='mt-0' pass={handleContinue}/>
        </div>

      </div>
        <Issues className={'mt-4'}/>
    </div>
  )
}

export default UploadCred_form