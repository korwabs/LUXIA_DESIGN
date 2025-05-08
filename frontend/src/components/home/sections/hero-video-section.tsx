import Image from 'next/image';

export function HeroVideoSection() {
  return (
    <div className="relative px-6 mt-10">
      <div className="relative w-full max-w-3xl mx-auto shadow-xl rounded-2xl overflow-hidden bg-[#F8F8F8] dark:bg-zinc-900">
        {/* LGCNS LUXIA 이미지 */}
        <div className="p-6 flex flex-col items-center">
          <div className="w-full relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-r from-[#A50034]/5 to-[#A50034]/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#A50034]">
                LGCNS <span className="text-[#54575A]">/ LUXIA</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                UX/UI 데이터 기반 마케팅 분석 어시스턴트
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-2xl">
                <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A50034]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">데이터 분석</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A50034]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">UX/UI 최적화</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A50034]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">성과 측정</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A50034]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">AI 분석</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A50034]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">타겟팅</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A50034]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">클라우드 통합</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
