import { useState, useEffect } from 'react';

// 계정 인터페이스 정의
interface Account {
  account_id: string;
  name: string;
  personal_account: boolean;
  created_at: string;
  updated_at: string;
}

// 사용자 계정 정보를 가져오는 훅
export function useAccounts() {
  const [data, setData] = useState<Account[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setIsLoading(true);
        
        // 실제 API 호출 대신 모의 데이터 사용
        const mockAccounts: Account[] = [
          {
            account_id: 'acc_personal',
            name: '내 계정',
            personal_account: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          },
          {
            account_id: 'acc_team1',
            name: '팀 계정 1',
            personal_account: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ];
        
        // 모의 데이터 로딩 지연 시간 추가
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setData(mockAccounts);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
        setIsLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  const refetch = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // 실제 API 호출 대신 모의 데이터 사용
      const mockAccounts: Account[] = [
        {
          account_id: 'acc_personal',
          name: '내 계정',
          personal_account: true,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        },
        {
          account_id: 'acc_team1',
          name: '팀 계정 1',
          personal_account: false,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }
      ];
      
      // 모의 데이터 로딩 지연 시간 추가
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setData(mockAccounts);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    refetch
  };
}
