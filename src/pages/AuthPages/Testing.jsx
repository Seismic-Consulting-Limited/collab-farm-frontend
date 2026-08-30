{/*
    import React from 'react'
    import { Check } from 'lucide-react'
    export const Testing = () => {
        return (
            <div className='flex justify-center min-h-screen items-center'>
            <div className='p-8 max-w-sm rounded-2xl border border-gray-200 shadow-sm'>
            <section className='flex flex-col gap-2'>
            <h1 className='px-3 py-1 text-xs font-semibold'>Most Popular</h1>
  <h1>Pro Plan</h1>
  <h1>$29 <span>/mo</span></h1>
  <p>Billed annually or $35 month-to-month</p>
  </section>
  <hr className='bg-black'/>
    <ul className='flex flex-col gap-3 mt-4'>
        <li className='flex items-center gap-3'>
        <Check className='w-5 h-5 text-blue-600 shrink-0'/>
        <span>Upto ten members</span>
        </li>
        <li className='flex items-center gap-3'>
        <Check className='w-5 h-5 text-blue-600 shrink-0'/>
        <span>Unlimited Cloud Storage</span>
        </li>
        <li className='flex items-center gap-3'>
        <Check className='w-5 h-5 text-blue-600 shrink-0'/>
        <span>Custom domain support</span>
        </li>
        <li className='flex items-center gap-3'>
        <Check className='w-5 h-5 text-blue-600 shrink-0'/>
        <span>24/7 Dedicated support</span>
        </li>
    </ul>
    <section className='mt-8'>
    <button className='border bg-black rounded-2xl text-white py-3 px-4 w-full'>Get Standard Now</button>
    </section>
    </div>
    </div>
  )
}

    */}
{/*
    import React from 'react'
    
    export const Testing = () => {
      return (
        <div className='flex justify-center min-h-screen items-center bg-yellow-500 '>
        <div className='max-w-md border border-slate-200 rounded-2xl p-6 bg-blue-700 flex flex-col gap-6'>
            <header className='h-6 flex justify-between items-center'>
                <span>
                    INV-2-26-08
                    </span>
                <span>
                    PAID
                    </span>
            </header>
            <hr className='border-black'/>
<div>
    <h1>Total Amount Due</h1>
<p className='text-white text-center'>$1,420.00 USD</p>
<p>Due by August 24, 2026</p>
</div>
<div>
    Billed To: <span>
        Sarah Jenkins
        sarah.j@enterprise.io
    </span>
</div>
<div >
    <ul className='flex flex-col gap-3'>
    <h1>Breakdown</h1>
    <li className='flex justify-between'>Frontend Engineering (40 hrs) 
    <span>$1,200.00</span>
    </li>
    <li className='flex justify-between'>UI/UX Design System Asset Pack
        <span>$220.00</span>
         </li>
    </ul>
</div>
<div>
    <p className='flex justify-between'>Subtotal <span>$1,420.00</span></p>
    <p className='flex justify-between'>
        Platform Fee (2%) <span>$28.40</span>
        </p> 
        <div className='flex justify-between'>
            <div className='flex gap-3 items-center'>
        <p>Discount</p>
        <span className='bg-purple-50 text-purple-700 text-xs px-2 py-0.5 rounded-md font-mono'>PROMO50 -5%</span>
            </div>
        <span> -$71.00</span>
        </div>
</div>
<h1 className='flex justify-between'>Final Total <span>$1,377.40</span></h1>
<div className='flex justify-between gap-3'>
    <button className='flex-1 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50'>Download PDF</button>
    <button className='flex-1 py-2.5 px-4 rounded-xl text-white font-medium text-sm hover:bg-slate-800'>Pay Invoice Now</button>
</div>
        </div>
        </div>
      )
    }
    
    */}
    {/*
        import React from 'react'
        import { SideBar } from "../../component/SideBar";
        import { NavBar } from '../../component/NavBar';
        const stats = [
    { label: 'Total Revenue', value: '$45,200', change: '+12.5%', positive: true },
    { label: 'Active Users', value: '2,840', change: '+8.2%', positive: true },
    { label: 'Conversion Rate', value: '12.4%', change: '-1.4%', positive: false },
    { label: 'Server Uptime', value: '99.98%', change: 'Normal', positive: true },
  ];
const features = [
{label: 'Fast Performance', value:'Built for optimal speed on every device.'},
{label: 'Mobile Friendly', value: 'Looks great whether on phones or ultra-wide monitors'},
{label: 'Clean Code', value:'Easy to maintain with utility-first classes.'},
];
export const Testing = () => {
    return (
        <div  className='flex h-screen overflow-hidden sm:overflow-clip bg-gray-100'>
        <SideBar/>
        <div className='flex flex-1 flex-col overflow-y-auto'>
        <NavBar/>
        <section className="flex flex-col md:flex-row items-center gap-8 p-6">
        
      {/* Left side: Text 
      <div className='w-full md:w-1/2 text-center md:text-left'>
      <h1 className='text-black font-extrabold text-3xl md:text-5xl'>Learn Responsive Design</h1>
      <p className='mt-6 font-bold'>Mobile shows this stacked.Laptop shows it side by side.</p>
      </div>

<div className='flex flex-col border bg-blue-700 text-white rounded-lg w-full md:w-1/2 h-48 lg:h-48 justify-center items-center'>
    <h1>Image/Visual Asset</h1>
</div>
    </section>
    <div className='flex flex-col mt-6 px-4 sm:flex-row gap-4 w-full justify-center'>
        <button className='w-full sm:w-auto border bg-blue-600 rounded-lg font-medium text-white px-6 py-3'>
            Get started
        </button>
        <button className='w-full sm:w-auto border bg-gray-700 rounded-lg font-medium text-white px-6 py-3'>
Live Demo
    </button>
    </div>
    <section className='flex flex-col items-center max-w-6xl mx-6'>
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 mt-4">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((what , index) => (
                <div key={index} className="p-6 bg-white border rounded-xl shadow-sm">
    <h1 className='text-blue-800 font-extrabold text-3xl'>{what.label}</h1>
    <p className='text-black font-extrabold'>{what.value}</p>
</div>

))}
        </div>
    </section>
        </div>
        </div>
    )
}

*/}

    {/*
    <section className="p-6 max-w-6xl mx-auto">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
    Our Features
  </h2>

  {/* Grid container 
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 
    <div className="p-6 bg-white border rounded-xl shadow-sm">
      <h3 className="font-bold text-lg text-blue-600">Fast Performance</h3>
      <p className="text-gray-600 mt-2">Built for optimal speed on every device.</p>
    </div>

    {/* Card 2 
    <div className="p-6 bg-white border rounded-xl shadow-sm">
      <h3 className="font-bold text-lg text-blue-600">Mobile Friendly</h3>
      <p className="text-gray-600 mt-2">Looks great whether on phones or ultra-wide monitors.</p>
    </div>

    {/* Card 3 
    <div className="p-6 bg-white border rounded-xl shadow-sm">
      <h3 className="font-bold text-lg text-blue-600">Clean Code</h3>
      <p className="text-gray-600 mt-2">Easy to maintain with utility-first classes.</p>
    </div>

  </div>
</section>
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-6 justify-center">
  {/* Primary Button *
  <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg">
    Get Started
  </button>

  {/* Secondary Button 
  <button className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg">
    Live Demo
  </button>
</div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-5xl font-bold">
          Learn Responsive Design
        </h1>
        <p className="mt-3 text-gray-600">
          Mobile shows this stacked. Laptop shows it side-by-side.
        </p>
      </div>

      {/* Right side: Box / Image 
      <div className="w-full md:w-1/2 h-48 bg-blue-500 rounded-xl flex items-center justify-center text-white">
        Image / Visual Asset
      </div>
        <main className='p-6'>
<section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-4'>
{stats.map((item, index) => (
<div className="bg-white border p-5 rounded-xl flex flex-col gap-3">
  <p className='text-sm font-medium text-gray-500'>{item.label}</p>
  <div className="flex justify-between items-baseline">
    <h2 className='text-2xl font-bold text-gray-900'>{item.value}</h2>
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
  item.positive
    ? 'bg-emerald-100 text-emerald-700'
    : 'bg-rose-100 text-rose-700'
}`}>{item.change}</span>
  </div>
</div>
    ))}
</section>
        </main>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  
  {/* Card 1 
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
    <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
    <div className="mt-2 flex items-baseline justify-between">
      <span className="text-2xl font-bold text-gray-900">$45,200</span>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
        +12.5%
      </span>
    </div>
  </div>

  {/* Card 2 
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
    <p className="text-sm text-gray-500 font-medium">Active Users</p>
    <div className="mt-2 flex items-baseline justify-between">
      <span className="text-2xl font-bold text-gray-900">2,840</span>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
        +8.2%
      </span>
    </div>
  </div>

  {/* Card 3 
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
    <p className="text-sm text-gray-500 font-medium">Conversion Rate</p>
    <div className="mt-2 flex items-baseline justify-between">
      <span className="text-2xl font-bold text-gray-900">12.4%</span>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-700">
        -1.4%
      </span>
    </div>
  </div>

  {/* Card 4 
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
    <p className="text-sm text-gray-500 font-medium">Server Uptime</p>
    <div className="mt-2 flex items-baseline justify-between">
      <span className="text-2xl font-bold text-gray-900">99.98%</span>
      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
        Normal
      </span>
    </div>
  </div>

</section>
    <aside className="w-64 h-screen bg-gray-900 text-white p-6 flex flex-col justify-between">
      
      {/* Top Section: App Logo + Nav Links 
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold tracking-wide">
          AppBrand
        </h2>

        <nav className="flex flex-col gap-2">
          <a href="#" className="bg-blue-600 px-3 py-2 rounded-lg text-sm font-medium">
            Overview
          </a>
          <a href="#" className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
            Analytics
          </a>
          <a href="#" className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
            Projects
          </a>
          <a href="#" className="text-gray-400 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
            Settings
          </a>
        </nav>
      </div>

      {/* Bottom Section: Footer / Logout 
      <div className="border-t border-gray-800 pt-4 text-xs text-gray-500">
        Logged in as <span className="text-gray-300">Hafeez</span>
      </div>

    </aside>
        const initials= (fullName) =>{
            return  fullName
    .split(' ')
.map((word) => word[0])
.join('')
.toUpperCase()
    }
    const userName= (fullName)=>{
return fullName === '' ? 'Hello there stranger' : `Hello ${fullName}`;
    }
  return (

    <div className='flex justify-between px-6 items-center h-16'>
        <div className='font-extrabold'>
        <h1>{userName('Abdul Hafeez')}</h1>
        </div>
        <div className='border border-black rounded-lg px-3 py-1.5 border-solid'>
        <input type="text" placeholder='Search...' className='outline-none'/>
        </div>
        <div className='border border-black rounded-full bg-blue-900 w-9 h-9 text-white items-center flex justify-center'>
        <span>
            {initials('Abdul Hafeez')}
            </span>
        </div>
    </div>
  )
            */}

            import React from 'react'
            import { KeyRound } from 'lucide-react';
            import Bed from '../../assets/icons/Bed.svg'
            import Breakfast from '../../assets/icons/Breakfast.svg'
            import House from '../../assets/icons/House.svg'
            import Mail from '../../assets/icons/Mail.svg'
            import Pin from '../../assets/icons/Pin.svg'
            import Logo from '../../assets/Logo.svg'
            import Barcode from '../../assets/icons/Barcode.svg'
            import Sun from '../../assets/icons/Sun.svg'
            import { Wifi } from 'lucide-react';

            export const Testing = () => {
                {/*
                    const cards=[
                        {label:'ARRIVAL',number:'01',heading:'Check-in from 15:00',date:'Sat,25 April',sub_heading:"Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree."},
                        {label:'WIFI',number:'02',heading:'Le soleil.Guest',placeholder:'password below',title:''},
                        {},
                    ];
                    */}
                const links=[
                    {label:'Your stay', icon:Bed},
                    {label:'The house', icon:House},
                    {label:'Around town', icon:Pin},
                {label:'Breakfast', icon:Breakfast},
            {label: 'Messages', icon:Mail},
            ];
              return (
            
                <div className='flex min-h-screen'>
                    {/* SIDERBAR */}
                    <aside className='w-[260px] shrink-0 box-border border bg-[rgb(251,246,240)] min-h-screen flex flex-col justify-between p-5'>
                       <div>
                        <img src={Logo} alt="LOGO" />
                        <hr className='mt-3'/>
                        <nav className='flex flex-col gap-4 pt-5'>
                        {links.map((text, index) => (
                            <a href="" className='flex gap-2 hover:border hover:bg-gray-300 hover:rounded-lg hover:pr-20 hover:py-1 hover:pl-6'>
    <img src={text.icon} alt="" />
    <span className='text-nowrap font-sans text-[16px] font-medium'>{text.label}</span>
</a>
))}
                        </nav>
</div>
{/*bottom */}
                        <div>
                        {/*weather update */}
                        <div className="w-full min-h-[110px] p-4 rounded-xl bg-[rgb(244,217,138)] border border-[#F3E2AE] flex flex-col justify-between box-border">
                         
                            <div className='flex items-center justify-between overflow-hidden w-full'>
                            <span className="text-[10px] font-mono font-bold tracking-wider text-[#7A6A43] uppercase">TODAY IN CASSIS</span>
                                <img src={Sun} alt="sun"/>
                            </div>
                            <div className="text-3xl font-fraunces font-normal text-[#2B2621] leading-none my-1">
    27&deg;
</div>
<p className="text-[11px] text-[#7A6A43] whitespace-nowrap">Sunny &bull; light breeze</p>
                        </div>
                        <hr className='border-dashed my-3'/>
                        {/*bottom part */}
                        <div>
<p className='font-mono text-xs text-[rgb(187,180,170)]'>EST. 1987</p>
<p className='font-mono text-xs py-3 text-[rgb(187,180,170)]'>MAISON SOLEIL &bull; 12 RUE DES <br /> OLIVIERS &bull; CASSIS</p>
<p className='font-mono text-xs text-[rgb(187,180,170)]'>2026 MAISON SOLEIL</p>
                        </div>

                        </div>
                        </aside>
                        {/*MAIN SECTION */}
                        <main className='p-6 md:p-10 w-full max-w-7xl mx-auto flex flex-col gap-8'>
                            {/*header*/}
                            <header className='flex flex-col gap-1'>

                            <div className='flex items-center gap-2 font-mono text-[13px] font-normal'>
                                <span>BOOKING</span>
                                <span>&bull;</span>
                                <span>CONFIRMED</span>
                            </div>
                            {/*title part */}
                            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
                                <h1>
                                    <span className='text-[rgb(57,52,45)] font-fraunces font-medium'>
                                        Bienvenue,
                                        </span>
                                <span className='text-[rgb(175,70,40)] font-fraunces  font-medium italic'>Lucia.</span>
                                     </h1>
                                <div className='flex items-center gap-3'>
<button className='border rounded-full px-5 py-2 font-mono font-bold text-[12px]'>Print receipt</button>
<button className='border rounded-full px-5 py-2 bg-[rgb(42,37,30)] font-mono font-bold text-[12px] text-white'>Add to calender</button>
                                </div>
                            </div>
                            </header>
{/*double card section */}
<div className='flex gap-6'>
    {/*first card */}
    <div className='border border-white rounded-xl p-4 shadow-xl'>
        {/*heading part */}
<div>
    <p className='flex justify-between'>
        <span className='font-mono text-xs text-[rgb(187,180,170)]'>RECEIPT </span>
     <span className='font-mono text-xs text-[rgb(187,180,170)]'>No MS-2026 0421-AH</span>
    </p>
    <p className='flex justify-between align-top'>
    <h1 className='font-fraunces font-normal text-xl'>Your stay</h1>
<span className='font-mono text-xs text-[rgb(187,180,170)]'>0421-AH</span>
    </p>
</div>
<hr className=' border border-dashed mb-3'/>
    {/*first main side */}
    <div className='flex flex-row md:flex md:flex-row justify-center gap-7 p-4'>
        {/*check in */}
        <div>
<p className='font-mono text-xs text-[rgb(187,180,170)]'>CHECK IN</p>
<h1 className='font-fraunces font-normal text-xl'>25 Apr</h1>
<p className='font-sans text-nowrap text-xs'>Saturday &bull; 15:00</p>
        </div>
        {/*check out */}
        <div>
<p className='font-mono text-xs text-[rgb(187,180,170)]'>CHECK OUT</p>
<h1 className='font-fraunces font-normal text-xl'>29 Apr</h1>
<p className='font-sans text-nowrap text-xs'>Wednesday &bull; 11:00</p>
        </div>
    </div>
    <hr className='border border-dashed mb-3'/>
    {/*pricing part */}
    <div className='flex flex-col gap-1'>
        <p className='flex justify-between'>
            <span className='tracking-tighter font-sans text-nowrap'>Room &bull; La Garrigue &times; 4 nights</span>
            <span className='font-mono tracking-tighter'> $620.00</span>
        </p>
        <p className='flex justify-between'>
            <span className='tracking-tighter font-sans text-nowrap'>Breakfast &times; 2 guests</span>
<span className='font-mono tracking-tighter'> $ 96.00</span>
        </p>
        <p className='flex justify-between'>
            <span className='tracking-tighter text-[rgb(187,180,170)] font-sans text-sm text-nowrap'>Tourist tax</span>
            <span className='font-mono tracking-tighter'> $ 14.00</span>
        </p>
    </div>
    <hr className='border border-gray-300 border-solid mb-3'/>
    {/*payment part */}
    <div>
<p className='flex justify-between items-center'>
    <span className='font-mono text-xs text-[rgb(187,180,170)]'>TOTAL PAID</span>
    <span className='font-fraunces font-normal text-xl' >$ 730.40</span>
</p>
<p className='flex justify-between'>
    <div className='flex gap-2 font-mono text-xs text-[rgb(187,180,170)]'>
    <span>PAID</span>
    <span>&bull;</span>
    <span>WISE</span>
    <span>&bull;</span>
    <span>GBP</span>
    </div>
    <img src={Barcode} alt="bar code" />
</p>
    </div>
    </div>
    {/* Welcome Card */}
<div className='relative w-[340px] h-[370px] rounded-[28px] bg-[#8B3A1C] p-6 shadow-2xl flex flex-col justify-between text-[#FFF0D9] rotate-1'>
  
  {/* Header */}
  <div className='flex items-center justify-between'>
    <span className='font-mono italic text-xs  tracking-widest text-[#FFF0D9]/80 uppercase'>
      WELCOME CARD
    </span>
    {/* Sun Icon */}
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-[#E9B64B]" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="3" fill="#E9B64B" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
      <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
  </div>

  {/* Main Note */}
  <div className='mt-2 space-y-4'>
  <div className='mb-12'>
      <p className='font-fraunces italic text-lg text-[#F3A56D] leading-tight pb-3'>
        A note from your host,
      </p>
      <p className='font-fraunces italic text-3xl font-medium leading-none text-[#FFF0D9] tracking-tight pb-3'>
        Margaux.
      </p>

    {/* 3 lines: font reduced to text-[11px] / leading-relaxed */}
    <p className='text-[rgb(255,240,217)] text-sm font-light text-[11px] leading-relaxed text-[#FFF0D9]/90'>
      We&apos;re so glad you&apos;re coming. The shutters will be open,<br />
      the lemonade cold, and the cat – Poivre – pretending<br />
      not to notice you.
    </p>
    </div>

  {/* Footer */}
  <div className='pt-2'>
    <span className='block font-mono text-[9px] tracking-[0.18em] text-[#FFF0D9]/60 leading-none mb-1.5 uppercase'>
      ROOM
    </span>
    <span className='font-fraunces text-[18px] text-[#FFF0D9] leading-none'>
      La Garrigue
    </span>
  </div>
  </div>
</div>
</div>
{/* Triple Card Grid - Using grid-cols-3 and matching the exact aspect ratio */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

  {/* CARD 01 - ARRIVAL */}
  <div className="bg-white/80 border border-[#E3DFD7] rounded-xl px-4 py-6 shadow-sm">
    <div className='mb-3'>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-1.5">
          <div className="bg-[#4A150E] rounded-md p-1 flex items-center justify-center">
            <KeyRound className="text-white w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-sm font-medium tracking-wider text-[#4A150E]">
            ARRIVAL
          </span>
        </div>
        <span className="font-fraunces text-lg font-medium text-[#4A150E]">01</span>
      </div>

      {/* Titles */}
      <h3 className="pb-1 font-fraunces text-lg font-semibold leading-snug text-gray-900">
        Check-in from 15:00
      </h3>
      <p className="font-sans text-xs text-gray-400 leading-tight">
        Sat, 25 April
      </p>
    </div>

    {/* Bottom text - compact text scale makes the card wide and short */}
    <p className="font-sans text-sm font-light text-gray-600 leading-[1.35] tracking-tight">
      Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.
    </p>
  </div>


  {/* CARD 02 - WIFI */}
  <div className="bg-white/80 border border-[#E3DFD7] rounded-xl px-4 py-3 flex flex-col justify-between shadow-sm">
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <div className="bg-[#1048B8] rounded-md p-1 flex items-center justify-center">
            <Wifi className="text-white w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-sm font-medium tracking-wider text-[#1048B8]">
            WIFI
          </span>
        </div>
        <span className="font-fraunces text-lg font-medium text-[#1048B8]">02</span>
      </div>

      {/* Titles */}
      <h3 className="font-fraunces text-lg font-semibold pb-1 leading-snug text-gray-900">
        Le Soleil &middot; Guest
      </h3>
      <p className="font-sans text-xs text-gray-400 leading-tight">
        Password below
      </p>
    </div>

    {/* Inputs Container */}
    <div className="flex flex-col gap-0.5 mt-2.5">
  {/* Network Row */}
  <div className="flex items-center justify-between px-3 py-2 border border-[#F7F5F0]/70 rounded-lg bg-[#F7F5F0]/70">
    <span className="font-mono text-[10px] tracking-widest text-[rgb(153,148,139)] uppercase">NETWORK</span>
    <span className="font-mono text-xs tracking-tight text-gray-800 flex items-center gap-1.5">
      le Soleil &bull; Guest
    </span>
  </div>

  {/* Password Row */}
  <div className="flex items-center justify-between px-3 py-2 border border-[#F7F5F0]/70 rounded-lg bg-[#F7F5F0]/70">
    <span className="font-mono text-[10px] tracking-widest text-[rgb(153,148,139)] uppercase">PASSWORD</span>
    <div className="flex items-center gap-2">
      <span className="font-mono text-xs text-gray-800">soleil-2026</span>
      <button 
        onClick={() => navigator.clipboard.writeText("soleil-2026")}
        className="font-mono tracking-wider  uppercase border-gray-300 hover:bg-white
     text-[11px] text-gray-800 font-light border rounded-full px-1.5" >
        COPY
      </button>
    </div>
  </div>
</div>
  </div>


  {/* CARD 03 - BREAKFAST */}
  <div className="bg-white/80 border border-[#E3DFD7] rounded-xl px-4 py-6 shadow-sm">
    <div className='mb-3'>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-1.5">
          <div className="bg-[#4A150E] rounded-md p-1 flex items-center justify-center">
            <KeyRound className="text-white w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-sm font-medium tracking-wider text-[#4A150E]">
            BREAKFAST
          </span>
        </div>
        <span className="font-fraunces text-lg font-medium text-[#4A150E]">03</span>
      </div>

      {/* Titles */}
      <h3 className="pb-1 font-fraunces text-lg font-semibold leading-snug text-gray-900">
      Served 8-10:30
      </h3>
      <p className="font-sans text-xs text-gray-400 leading-tight">
      On the terrace
      </p>
    </div>

    {/* Bottom text - compact text scale makes the card wide and short */}
    <p className="font-sans text-sm font-light text-gray-600 leading-[1.35] tracking-tight mt-3">
    Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.
    </p>
  </div>
  </div>
                     {/*
                        {/*triple card section 
                            <div className='max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-100000'>
                        {/*first card 
                        <div className='border rounded-xl px-5 py-10 shadow-xl border-gray-300 border-solid flex flex-col justify-between'>
<div>

                            <div className='flex justify-between pb-4'>
                                <div className='flex gap-2 items-center'>
                                <KeyRound className='bg-red-800 border rounded-md p-2 text-white w-8 h-8'/>
                                    <h1 className='tracking-wider font-mono font-medium text-red-800'>ARRIVAL</h1>
                                </div>
                                    <h2 className='font-fraunces text-lg font-medium text-red-800'>01</h2>
                            </div>
                        <div>
                            <h1 className='font-fraunces font-semibold text-lg pb-1'>Check-in from 15:00</h1>
                            <p className='font-sans font-light text-xs'>Sat,25 April</p>
                        </div>
</div>
                            <p className='font-sans tracking-tight font-light text-sm'>Ring the brass bell by the blue door.If we're at  the market,the key is in the terracotta pot by the olive tree.</p>
                        </div>
                        {/*second card 

                        <div className='border rounded-xl p-5 w-full shadow-xl border-gray-300 border-solid flex flex-col justify-between'>
<div>

<div className='flex justify-between'>
    <div className='flex gap-2 items-center pb-3'>
    <Wifi className='bg-blue-900 border rounded-md p-2 text-white w-8 h-8' />
        <h1 className='tracking-wider font-mono font-medium text-blue-900'>WIFI</h1>
    </div>
        <h2 className='font-fraunces text-lg font-medium text-blue-900'>02</h2>
</div>
<div>
<h1 className='font-fraunces font-semibold text-lg pt-1 pb-1'>Le Soleil <span>&bull;</span> Guest </h1>
<p className='font-sans font-light text-xs pb-3'>Password below</p>
</div>
{/* network name and password 
<div className='flex flex-col gap-1 w-full'>
<div className="w-full flex items-center justify-between border border-gray-200 rounded-lg p-2.5 sm:p-3 gap-2 bg-[rgb(242,239,234)]">
  
  <span className="font-mono text-[11px] tracking-widest text-[rgb(153,148,139)]">
    NETWORK
  </span>

  {/* Value 
  <p className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
    Le Soleil <span className="font-bold">&bull;</span> Guest
  </p>
</div>
{/*password 
<div className="w-full flex items-center justify-between border border-gray-200 rounded-lg sm:p-3 p-2.5 gap-2 bg-[rgb(242,239,234)]">
<span className="font-mono text-[11px] tracking-widest text-[rgb(153,148,139)]">
PASSWORD</span>
    <div className='flex gap-2 items-center'>
        <p className="text-sm font-semibold text-gray-800">soleil-2026</p>
        <button onClick={() => navigator.clipboard.writeText("soleil-2026")} className='text-[11px] text-gray-800 font-light border rounded-full px-2.5'>COPY</button>
    </div>
</div>
</div>
</div>
</div>
                        {/*third card 
<div className='border rounded-xl p-5 shadow-xl border-gray-300 border-solid flex flex-col justify-between'>
    <div>

<div className='flex justify-between pb-3'>
    <div className='flex gap-2 items-center'>
    <img src={Breakfast} alt="bf" className='border bg-[rgb(193,74,114)] rounded-md p-2 fill-white w-8 h-8 '/>
        <h1 className='tracking-wider font-mono font-medium text-[rgb(184,98,125)] '>BREAKFAST</h1>
    </div>
    <p className='font-fraunces text-lg font-medium text-[rgb(184,98,125)]'>03</p>
</div>
<div>
    <h1 className='font-fraunces font-semibold text-lg pt-1 pb-1'>Served 8-10:30</h1>
    <p className='font-sans font-light text-xs pb-3'>On the terrace</p>
</div>
    </div>
    <p className='font-sans tracking-tight font-light text-sm'>Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.</p>
</div>
                            </div>
                        */}
                        </main>
                    
                </div>
              )
            }
            