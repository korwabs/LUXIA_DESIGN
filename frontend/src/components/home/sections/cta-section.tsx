import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full pt-16 pb-16 bg-gradient-to-r from-[#A50034]/5 via-[#A50034]/10 to-[#A50034]/5"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full rounded-lg p-8 border border-[#A50034]/20 bg-white dark:bg-zinc-900 shadow-lg">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#A50034]">
              혁신적인 UX&I 솔루션으로<br />
              LGCNS 비즈니스 성장을 가속화하세요
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              LUXIA를 통한 고객 경험 분석, UX/UI 개선, 데이터 기반 인사이트로<br />
              더 효율적인 분석과 결정을 내리고 사용자 경험을 최대 65% 향상시켜받을 수 있습니다.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <Link
              href="/dashboard"
              className="inline-flex h-12 items-center justify-center gap-2 text-base font-medium tracking-wide rounded-md text-white px-6 bg-[#A50034] hover:bg-[#A50034]/90 transition-all duration-200 w-fit shadow-md"
            >
              <span>지금 시작하기</span>
              <ArrowRight className="size-5" />
            </Link>
            <span className="text-sm text-muted-foreground">가입 후 30일 무료 체험</span>
          </div>
        </div>
      </div>
    </section>
  );
}
