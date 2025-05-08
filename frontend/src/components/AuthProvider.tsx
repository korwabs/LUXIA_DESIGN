import React, { createContext, useState, useContext, useEffect } from 'react';

// 사용자 인터페이스 정의
interface User {
  id: string;
  email?: string;
  name?: string;
  avatar_url?: string;
}

// 인증 컨텍스트 인터페이스 정의
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

// 인증 컨텍스트 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider 컴포넌트 정의
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 초기 사용자 상태 로드
  useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true);
      try {
        // 로컬 스토리지에서 사용자 정보 확인 (실제로는 API 호출 필요)
        const storedUser = localStorage.getItem('luxia_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  // 로그인 함수
  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // 모의 로그인 처리 (실제로는 API 호출 필요)
      const mockUser: User = {
        id: 'user-123',
        email,
        name: email.split('@')[0],
        avatar_url: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`,
      };
      
      // 로컬 스토리지에 사용자 정보 저장
      localStorage.setItem('luxia_user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Sign in failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 회원가입 함수
  const signUp = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      // 모의 회원가입 처리 (실제로는 API 호출 필요)
      const mockUser: User = {
        id: 'user-' + Math.random().toString(36).substring(2, 9),
        email,
        name,
        avatar_url: `https://ui-avatars.com/api/?name=${name}&background=random`,
      };
      
      // 로컬 스토리지에 사용자 정보 저장
      localStorage.setItem('luxia_user', JSON.stringify(mockUser));
      setUser(mockUser);
    } catch (error) {
      console.error('Sign up failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 로그아웃 함수
  const signOut = async () => {
    setIsLoading(true);
    try {
      // 로컬 스토리지에서 사용자 정보 제거
      localStorage.removeItem('luxia_user');
      setUser(null);
    } catch (error) {
      console.error('Sign out failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 비밀번호 재설정 함수
  const resetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      // 모의 비밀번호 재설정 처리 (실제로는 API 호출 필요)
      console.log('Password reset email sent to:', email);
    } catch (error) {
      console.error('Password reset failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // 인증 컨텍스트 값 설정
  const value = {
    user,
    isLoading,
    signIn,
    signOut,
    signUp,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 인증 컨텍스트 훅
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
