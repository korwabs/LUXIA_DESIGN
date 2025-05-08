import { SectionHeader } from '@/components/home/section-header';
import { BarChart3, LineChart, Users, Lightbulb, PieChart, Smartphone } from 'lucide-react';
import Link from 'next/link';

export function OpenSourceSection() {
  return (
    <section
      id="open-source"
      className="flex flex-col items-center justify-center w-full relative pb-18"
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-balance pb-1">
            UX&I 데이터 분석 플랫폼
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            LUXIA를 통해 고객 경험을 분석하고, UX/UI 요소를 향상시켜<br />
            데이터 기반 여정 분석과 최적화를 구현하세요.
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="rounded-lg bg-white dark:bg-zinc-900 border border-[#A50034]/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-[#A50034]" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-tight text-[#A50034]">
                  마케팅 데이터 분석
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Google Analytics, BigQuery를 통한 데이터 분석으로 우수한 마케팅 인사이트를 도출합니다. 사용자 행동을 분석하고 운영 효율을 높이세요.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  실시간 분석
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  데이터 시각화
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white dark:bg-zinc-900 border border-[#A50034]/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-[#A50034]" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-tight text-[#A50034]">
                  웹 타겟팅 정확도 향상
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  플랫폼을 통해 연령, 성별, 관심사 등 고객 세분화를 정확하게 분석하고 퍼소나바이즈된 경험을 제공하세요.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  사용자 퍼소나
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  타겟팅 캐페인
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white dark:bg-zinc-900 border border-[#A50034]/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-[#A50034]" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-tight text-[#A50034]">
                  웹 탐색 자동화
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  AI 기반 웹 탐색 자동화로 고객의 사이트 사용성을 분석하고 UX/UI 문제점을 자동으로 식별하여 개선 방안을 제시합니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  UX/UI 개선
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  자동화 테스트
                </span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-zinc-900 border border-[#A50034]/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center">
                <LineChart className="h-6 w-6 text-[#A50034]" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-tight text-[#A50034]">
                  성과 측정 및 보고
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  다양한 KPI를 통합해 당신의 마케팅 성과를 실시간으로 추적하고 인터랙티브 대시보드로 경영진에게 필요한 보고서를 자동으로 생성합니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  성과 대시보드
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  자동 보고서
                </span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-zinc-900 border border-[#A50034]/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center">
                <PieChart className="h-6 w-6 text-[#A50034]" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-tight text-[#A50034]">
                  리털션 전략 제시
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  고객 방문 주기, 잠재고객 식별, 고객 이탈 예측 알고리즘을 통해 효과적인 리털션 전략을 제시하고 타겟팅된 캐페인 출리를 자동화합니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  고객 유지 대책
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  강화학습 모델
                </span>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-white dark:bg-zinc-900 border border-[#A50034]/20 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-[#A50034]/10 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-[#A50034]" />
              </div>
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-tight text-[#A50034]">
                  AI 기반 마케팅 전략
                </h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  인공지능이 고객데이터를 분석하여 최신 트렌드와 시장 동향을 반영한 마케팅 전략을 자동으로 제시합니다. A/B 테스트를 통해 정확도를 높입니다.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  마케팅 전략 수립
                </span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[#A50034]/10 border-[#A50034]/20 text-[#A50034]">
                  A/B 테스트
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
