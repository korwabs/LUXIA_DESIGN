import { useState, useEffect } from 'react';

// 미디어 쿼리를 사용하기 위한 커스텀 훅
export function useMediaQuery(query: string): boolean {
  // 클라이언트 사이드에서 실행 중인지 확인하기 위한 상태
  const [mounted, setMounted] = useState(false);
  
  // 미디어 쿼리 일치 여부를 저장하는 상태
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트되었음을 표시
    setMounted(true);
    
    // 미디어 쿼리 매칭 여부 초기화
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      setMatches(media.matches);
      
      // 미디어 쿼리 변경 이벤트 리스너 설정
      const listener = (e: MediaQueryListEvent) => {
        setMatches(e.matches);
      };
      
      // 미디어 쿼리 이벤트 리스너 등록
      media.addEventListener('change', listener);
      
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        media.removeEventListener('change', listener);
      };
    }
  }, [query]);

  // SSR에서는 항상 false 반환, 클라이언트 사이드에서만 실제 매칭 결과 반환
  return mounted ? matches : false;
}
