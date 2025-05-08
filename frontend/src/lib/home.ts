// 홈페이지 관련 설정
import { Github } from 'lucide-react';

export const siteConfig = {
  name: 'LUXIA',
  description: 'LG UX&I Assistant powered by LGCNS',
  nav: {
    links: [
      {
        id: 'hero',
        name: '소개',
        href: '#hero',
      },
      {
        id: 'features',
        name: '기능',
        href: '#open-source',
      },
      {
        id: 'pricing',
        name: '가격 정책',
        href: '#pricing',
      },
      {
        id: 'cta',
        name: '시작하기',
        href: '#cta',
      },
    ],
  },
  hero: {
    badge: 'LUXIA by LGCNS - UX&I Assistant',
    badgeIcon: <Github className="h-4 w-4" />,
    title: 'LUXIA, Your UX&I Assistant',
    description: 'LUXIA는 LGCNS에서 개발한 UX&I 솔루션으로, 고객 경험 데이터를 분석하고 UX/UI 개선 인사이트를 제공합니다.',
    inputPlaceholder: '마케팅 데이터를 분석하고 인사이트를 도출하는 방법을 알려주세요',
    githubUrl: 'https://github.com/lgcns/luxia',
  },
  ctaSection: {
    title: 'LUXIA, Your UX&I Assistant',
    description: 'LUXIA는 LGCNS에서 개발한 UX&I 솔루션으로, 고객 경험 데이터를 분석하고 UX/UI 개선 인사이트를 제공합니다.',
    button: {
      text: '지금 시작하기',
      href: '/dashboard',
    },
    subtext: '30일 무료 체험',
    backgroundImage: '/cta-background.jpg',
  },
  footerLinks: [
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
  ],
};
