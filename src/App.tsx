import React from 'react';
import { User } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#5b8c2a] via-[#8bc34a] to-[#cddc39] text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-md relative overflow-hidden">
        {/* Decorative background curve approximation */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#4caf50]/20 to-transparent pointer-events-none" />
        
        <div className="flex items-center space-x-4 z-10">
          <span className="text-3xl md:text-4xl font-extrabold tracking-tighter">LANDBANK</span>
          <div className="h-8 w-px bg-white/50 hidden md:block" />
          <div className="hidden md:flex items-center space-x-2">
            {/* Placeholder for OFBank Logo */}
            <div className="flex space-x-1">
              <div className="w-3 h-6 bg-red-500" />
              <div className="w-3 h-6 bg-yellow-500" />
              <div className="w-3 h-6 bg-blue-500" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold">Overseas</span>
              <span className="text-lg font-bold">FilipinoBank</span>
            </div>
          </div>
        </div>
        <span className="text-4xl md:text-6xl font-light tracking-widest z-10 drop-shadow-md">iAccess</span>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b-4 border-[#005b2b] py-2 px-6 md:px-12">
        <ul className="flex flex-wrap items-center text-sm md:text-xs lg:text-sm text-[#005b2b] font-medium">
          {[
            'About Us',
            'FAQs',
            'Security Policy',
            'Data Privacy Statement',
            'Advisory on ATM Use',
            'iAccess Features',
            'Find Us',
          ].map((item, index, array) => (
            <React.Fragment key={item}>
              <li>
                <a href="#" className="hover:underline hover:text-[#8bc34a] transition-colors">
                  {item}
                </a>
              </li>
              {index < array.length - 1 && (
                <li className="mx-2 text-gray-400 select-none">|</li>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-[1400px] mx-auto w-full p-6 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#005b2b] tracking-tight">
            Welcome to iAccess!
          </h1>

          {/* Advisory Banner (CSS Approximation) */}
          <div className="bg-gradient-to-br from-[#aed581] to-[#7cb342] rounded-lg p-6 md:p-8 text-white shadow-md relative overflow-hidden min-h-[250px] flex flex-col justify-center">
            {/* Decorative background elements */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-10 right-20 w-32 h-32 bg-black/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="z-10 max-w-lg">
              <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-4 py-1 mb-4 border border-white/50 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-md">CLIENT ADVISORY</h2>
              </div>
              <p className="text-lg md:text-xl leading-relaxed font-medium drop-shadow-sm">
                Please be advised that the <span className="font-bold">LANDBANK iAccess</span> will be temporarily unavailable during system maintenance on <span className="font-bold">Tuesday, March 10, 2026</span> from <span className="font-bold">12:30 AM</span> (PHT) until <span className="font-bold">3:30 AM</span> (PHT).
              </p>
              <p className="mt-4 text-base md:text-lg font-medium drop-shadow-sm">
                Please schedule your transactions in the LANDBANK iAccess before or after this period to avoid inconvenience.
              </p>
              <p className="mt-4 text-base md:text-lg font-medium drop-shadow-sm">
                Thank you for understanding.
              </p>
            </div>
            {/* Placeholder for the gears/phone graphic on the right */}
            <div className="hidden md:block absolute right-4 bottom-4 opacity-80">
               {/* A simple CSS representation of the graphic */}
               <div className="relative w-40 h-40">
                  <div className="absolute inset-0 border-4 border-white/40 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-4 border-4 border-white/60 rounded-full border-dotted animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-12 bg-white/20 rounded-lg backdrop-blur-md flex items-center justify-center border border-white/50 shadow-lg">
                    <div className="w-1/2 h-2 bg-white/80 rounded-full" />
                  </div>
               </div>
            </div>
          </div>

          {/* Warning Text */}
          <div className="text-xs md:text-sm text-black mt-4 leading-relaxed">
            <p className="mb-2">
              <span className="text-red-600 font-bold">WARNING:</span> iAccess is for authorized clients only. It shall be a criminal offense for any person to:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-2 mb-4">
              <li>Obtain access to data without authority;</li>
              <li>Corrupt, alter, steal or destroy data;</li>
              <li>Interfere in computer system or server;</li>
              <li>Introduce computer virus.</li>
            </ol>
            <p>
              Penalty shall consist of minimum fine of Php100,000 and a maximum commensurate to the damage incurred and a mandatory imprisonment of six months to three years under R.A. No. 8792 (E-Commerce Act of the Philippines).
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 flex flex-col space-y-8">
          
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-8 border border-gray-100">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full bg-[#d9d9d9] text-gray-800 placeholder-gray-500 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#8bc34a] transition-shadow"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-[#d9d9d9] text-gray-800 placeholder-gray-500 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-[#8bc34a] transition-shadow"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#cddc39] hover:bg-[#c0ca33] text-[#005b2b] font-bold py-3 px-4 rounded-md flex justify-center items-center gap-2 transition-colors shadow-sm"
              >
                <User size={20} className="text-[#005b2b]" />
                LOGIN
              </button>
            </form>

            <div className="mt-6 text-center text-sm font-medium space-y-2">
              <p>
                Not yet enrolled?{' '}
                <a href="#" className="text-[#8bc34a] hover:underline">
                  Sign up now!
                </a>
              </p>
              <p>
                Upon login, I hereby agree to its{' '}
                <a href="#" className="text-[#8bc34a] hover:underline">
                  Terms and Conditions
                </a>
              </p>
              <p>
                Click{' '}
                <a href="#" className="text-[#8bc34a] hover:underline">
                  here
                </a>{' '}
                to download enrollment form.
              </p>
            </div>

            <div className="mt-8 flex justify-center space-x-6 text-sm font-medium">
              <a href="#" className="text-[#8bc34a] hover:underline">
                Unlock ID
              </a>
              <a href="#" className="text-[#8bc34a] hover:underline">
                Forgot Password
              </a>
            </div>
          </div>

          {/* Foreign Exchange & Contact */}
          <div className="flex flex-col items-end space-y-6 text-right">
            <div className="flex items-center space-x-3">
              <span className="font-bold text-[#005b2b] tracking-wide">FOREIGN EXCHANGE</span>
              <button className="bg-[#66cdaa] hover:bg-[#48b592] text-white text-xs font-bold py-1 px-3 rounded-full transition-colors shadow-sm">
                CLICK HERE
              </button>
            </div>

            <div className="text-xs md:text-sm space-y-1">
              <h3 className="font-bold text-[#005b2b] mb-2">LANDBANK CUSTOMER CARE CENTER</h3>
              <p>Tel. Nos.: (02) 8405-7000 (NCR) or</p>
              <p>1-800-10-405-7000 (PLDT Domestic Toll Free/Outside NCR)</p>
              <p>
                Email:{' '}
                <a href="mailto:customercare@landbank.com" className="hover:underline">
                  customercare@landbank.com
                </a>
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#7cb342] text-white py-6 px-6 md:px-12 mt-auto">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs md:text-sm">
          
          {/* Left: PDIC */}
          <div className="flex items-center space-x-4">
            {/* PDIC Logo Placeholder */}
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#005b2b] font-bold text-[10px] leading-tight text-center border-2 border-yellow-400 shrink-0">
              PDIC
            </div>
            <p className="leading-tight">
              Deposits are insured<br />
              by PDIC up to P1 Million<br />
              per depositor.
            </p>
          </div>

          {/* Middle: BSP & BancNet */}
          <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-1">
            <p>Regulated by the Bangko Sentral ng Pilipinas</p>
            <a href="https://www.bsp.gov.ph/" className="hover:underline">https://www.bsp.gov.ph/</a>
            <p className="flex items-center space-x-1">
              <span>A proud member of</span>
              <span className="font-bold italic text-red-600 bg-white px-1 rounded-sm text-[10px]">BancNet</span>
            </p>
          </div>

          {/* Right: Copyright & Logo */}
          <div className="flex items-center justify-start md:justify-end space-x-4 text-left md:text-right">
            <div className="leading-tight">
              <p>Copyright © 2024</p>
              <p>Land Bank of the Philippines.</p>
              <p>All Rights Reserved.</p>
            </div>
            {/* Landbank Logo Placeholder */}
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
              <div className="w-6 h-6 border-2 border-[#005b2b] rounded-sm transform rotate-45" />
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
