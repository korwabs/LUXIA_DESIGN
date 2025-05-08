'use client';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function FooterSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mount, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = !mounted
    ? '/lg-logo.svg'
    : resolvedTheme === 'dark'
      ? '/lg-logo-white.svg'
      : '/lg-logo.svg';

  // LG 푸터 메뉴 정의
  const footerLinks = [
    {
      title: '제품',
      links: [
        { id: 'ux-assistant', title: 'UX&I 어시스턴트', url: '/products/assistant' },
        { id: 'data-analytics', title: '데이터 분석', url: '/products/analytics' },
        { id: 'ux-improvements', title: 'UX/UI 개선', url: '/products/ux-ui' },
        { id: 'marketing-strategy', title: '전략 분석', url: '/products/strategy' },
      ],
    },
    {
      title: '회사',
      links: [
        { id: 'about', title: '회사 소개', url: '/about' },
        { id: 'careers', title: '채용 정보', url: '/careers' },
        { id: 'privacy', title: '개인정보 처리방침', url: '/privacy' },
        { id: 'terms', title: '이용약관', url: '/terms' },
      ],
    },
    {
      title: '자원',
      links: [
        { id: 'docs', title: '문서', url: '/docs' },
        { id: 'blog', title: '블로그', url: '/blog' },
        { id: 'case-studies', title: '사례 연구', url: '/case-studies' },
        { id: 'support', title: '고객 지원', url: '/support' },
      ],
    },
  ];

  return (
    <footer id="footer" className="w-full bg-[#F8F8F8] dark:bg-zinc-900 border-t border-[#E5E5E5] dark:border-zinc-800">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-sm mx-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-16 h-16">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="#A50034" />
                <path d="M35,35 L35,65 L45,65 L45,50 L65,65 L65,50 L45,35 L35,35 Z" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#A50034]">LUXIA</span>
              <span className="font-medium text-xs text-muted-foreground">by LGCNS</span>
            </div>
          </Link>
          <p className="tracking-tight text-muted-foreground font-medium">
            LUXIA는 LGCNS에서 개발한 UX&I 솔루션으로, 고객 경험 데이터를 분석하고 UX/UI 개선 인사이트를 제공합니다.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/LGElectronics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-[#A50034]/10 flex items-center justify-center hover:bg-[#A50034]/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5 text-[#A50034]"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/LGUS"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-full bg-[#A50034]/10 flex items-center justify-center hover:bg-[#A50034]/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5 text-[#A50034]"
              >
                <path
                  fill="currentColor"
                  d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/lg-electronics/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#A50034]/10 flex items-center justify-center hover:bg-[#A50034]/20 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5 text-[#A50034]"
              >
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="pt-10 md:pt-0 md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-3">
                <li className="mb-2 text-sm font-semibold text-[#A50034]">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                  >
                    <Link href={link.url} className="hover:text-[#A50034] transition-colors">{link.title}</Link>
                    <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100 group-hover:border-[#A50034]">
                      <ChevronRightIcon className="h-4 w-4 group-hover:text-[#A50034]" />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full border-t border-[#E5E5E5] dark:border-zinc-800 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} LG Electronics. All rights reserved.
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-[#A50034] transition-colors">
              개인정보 처리방침
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-[#A50034] transition-colors">
              이용약관
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-[#A50034] transition-colors">
              쿠키 정책
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
