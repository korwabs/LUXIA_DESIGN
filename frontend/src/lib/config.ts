// 설정 값을 관리하는 구성 파일
// 빌드 오류를 해결하기 위한 목적으로 작성되었습니다.

// 환경 변수에서 값을 가져오거나 기본값 사용
function getEnv(key: string, defaultValue: string = ''): string {
  if (typeof process !== 'undefined' && process.env) {
    return process.env[key] || defaultValue;
  }
  return defaultValue;
}

// 구독 등급 정의
export const SUBSCRIPTION_TIERS = {
  FREE: {
    priceId: 'price_free',
    name: 'Free',
    price: 0,
    features: [
      '기본 데이터 분석',
      '제한된 UX/UI 분석',
      '기본 보고서',
      '30일 데이터 보관',
    ],
    limits: {
      projectsCount: 3,
      maxThreadsPerProject: 10,
      maxMessagesPerThread: 100,
      storageLimit: 100 * 1024 * 1024, // 100MB
    }
  },
  PRO: {
    priceId: 'price_pro',
    name: 'Pro',
    price: 29,
    features: [
      '고급 데이터 분석',
      '전체 UX/UI 분석 및 개선 제안',
      '맞춤형 보고서',
      '무제한 데이터 보관',
      '우선 기술 지원',
    ],
    limits: {
      projectsCount: 10,
      maxThreadsPerProject: 50,
      maxMessagesPerThread: 1000,
      storageLimit: 5 * 1024 * 1024 * 1024, // 5GB
    }
  },
  ENTERPRISE: {
    priceId: 'price_enterprise',
    name: 'Enterprise',
    price: 99,
    features: [
      '전체 기능 사용 가능',
      '맞춤형 통합',
      '전담 계정 관리자',
      '서비스 수준 계약 (SLA)',
      '온보딩 및 교육',
    ],
    limits: {
      projectsCount: -1, // 무제한
      maxThreadsPerProject: -1, // 무제한
      maxMessagesPerThread: -1, // 무제한
      storageLimit: -1, // 무제한
    }
  }
};

// 서비스 구성
export const config = {
  APP_NAME: 'LUXIA',
  APP_DESCRIPTION: 'LG UX&I Assistant powered by LGCNS',
  SITE_URL: getEnv('NEXT_PUBLIC_SITE_URL', 'https://luxia.lgcns.com'),
  API_BASE_URL: getEnv('NEXT_PUBLIC_API_BASE_URL', '/api'),
  
  // 구독 설정
  SUBSCRIPTION_TIERS,
  
  // 기능 플래그
  FEATURES: {
    ENABLE_ANALYTICS: true,
    ENABLE_FILE_UPLOAD: true,
    ENABLE_TEAM_COLLABORATION: true,
    ENABLE_API_ACCESS: true,
  }
};

// 로컬 개발 모드 확인
export function isLocalMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}

// 개발 환경 확인
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

// 프로덕션 환경 확인
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}
