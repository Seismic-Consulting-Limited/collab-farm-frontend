import React from 'react'

export const ProgressBar = ({totalSteps,currentStep,progress, className}) => {
  return (
    <div className='w-full h-fit'>
        <div className='flex justify-between items-center'>
            <span className='w-full h-auto text-[hsla(0,0%,19%,1)] font-[manrope] text-base font-normal'>Step {currentStep} of {totalSteps}</span>
            <span className='h-auto w-fit text-[hsla(0,0%,19%,1)] font-[manrope] font-semibold text-base'>{progress}</span>
        </div>
        <div className={`flex ${className}`}>
            {Array.from({length:totalSteps}).map((_, index)=>{
                const stepNumber= index + 1;
                const isCompleted= stepNumber<=currentStep;
                return(
                    <div key={stepNumber} className={`flex-1 h-1 rounded-full ${
                        isCompleted ? 'bg-[hsla(143,32%,28%,1)]' : 'bg-[hsla(0,0%,90%,1)]'
                    }`}>
                    </div>
                )
            })}
        </div>
    </div>
)
}
{/*
    */}