import React from 'react';
import { Button } from '@/components/ui/button';

interface GoogleSignInProps {
  returnUrl?: string;
  className?: string;
}

export default function GoogleSignIn({
  returnUrl = '/',
  className,
}: GoogleSignInProps) {
  const handleGoogleSignIn = async () => {
    try {
      // 실제로는 Google OAuth 로그인 로직이 필요합니다.
      // 여기서는 빌드 오류 해결을 위한 목업 구현입니다.
      console.log('Google Sign In clicked with return URL:', returnUrl);
      
      // 모의 로그인 성공 후 리다이렉트
      if (typeof window !== 'undefined') {
        // 모의 사용자 정보 저장
        localStorage.setItem('luxia_user', JSON.stringify({
          id: 'user-google-123',
          email: 'example@gmail.com',
          name: 'Google User',
          avatar_url: 'https://ui-avatars.com/api/?name=Google+User&background=random',
        }));
        
        // 리다이렉트 처리
        window.location.href = returnUrl;
      }
    } catch (error) {
      console.error('Google sign in failed:', error);
    }
  };

  return (
    <Button
      onClick={handleGoogleSignIn}
      className={`w-full h-12 rounded-md flex items-center justify-center gap-3 border border-[#E5E5E5] bg-white dark:bg-zinc-800 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all ${className}`}
      type="button"
    >
      {/* Google 로고 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="20px"
        height="20px"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        />
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
      </svg>

      <span>Google로 계속하기</span>
    </Button>
  );
}
