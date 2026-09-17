import React from 'react'
import LoanOver from './LoanOver'
import TableHead from './TableHead'
import More from '../../assets/More.svg'

const LoanHistory = () => {
    const data = [
  {
    id:1,
    LoanId: "LN-24-0001",
    LoanAmount: "₦2,000,000",
    repayment: "₦2,000,000",
    LoanDate: "27th Aug, 2024",
    DueDate: "27th Aug, 2024",
    Status: "Repaid"
  },
  {
    id:2,
    LoanId: "LN-24-0002",
    LoanAmount: "₦2,000,000",
    repayment: "₦2,000,000",
    LoanDate: "27th Aug, 2024",
    DueDate: "27th Aug, 2024",
    Status: "Repaid"
  },
  {
    id:3,
    LoanId: "LN-24-0003",
    LoanAmount: "₦2,000,000",
    repayment: "₦200,000",
    LoanDate: "27th Aug, 2024",
    DueDate: "27th Aug, 2024",
    Status: "Partially"
  },
  {
    id:4,
    LoanId: "LN-24-0004",
    LoanAmount: "₦2,000,000",
    repayment: "₦0",
    LoanDate: "27th Aug, 2024",
    DueDate: "27th Aug, 2024",
    Status: "Overdue"
  },
  {
    id:5,
    LoanId: "LN-24-0005",
    LoanAmount: "₦2,000,000",
    repayment: "₦0",
    LoanDate: "27th Aug, 2024",
    DueDate: "27th Aug, 2024",
    Status: "Active"
  },
  {
    id:6,
    LoanId: "LN-24-0006",
    LoanAmount: "₦2,000,000",
    repayment: "₦2,000,000",
    LoanDate: "27th Aug, 2024",
    DueDate: "27th Aug, 2024",
    Status: "Repaid"
  },
  {
    id:7,
    LoanId: "LN-24-0007",
    LoanAmount: "₦2,000,000",
    repayment: "₦2,000,000",
    LoanDate: "27th Aug, 2024",
    DueDate: "27th Aug, 2024",
    Status: "Repaid"
  }
]
  return (
<div>    
  <div className='overflow-x-auto'>
        <div className='inline-block min-w-full align-middle'>
          <table className='min-w-[950px] w-full table-fixed border-collapse text-left'>
          <TableHead first='Loan_ID' second='Loan_Amount' third='Repayment_Amount' four='Loan_Date' five='Due_Date' six='Status' seven=''/>
            <tbody className='divide-y divide-[#E2E8F0] bg-white'>
              {data.map((farmer) => (
                <LoanOver
                  key={farmer.id}
                  Loan_ID={farmer.LoanId}
                  Loan_Amount={farmer.LoanAmount}
                  Repayment_Amount={farmer.repayment}
                  Loan_Date={farmer.LoanDate}
                  Due_Date={farmer.DueDate}
                  Status={farmer.Status}
                  Action={More}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LoanHistory
