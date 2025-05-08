// 이 파일은 빌드 오류를 해결하기 위한 Supabase 서버 측 클라이언트의 모의 구현입니다.
// 실제 기능은 없습니다.

export interface User {
  id: string;
  email?: string;
  name?: string;
  avatar_url?: string;
}

export interface Account {
  account_id: string;
  name: string;
  personal_account: boolean;
  created_at?: string;
  updated_at?: string;
  owner_id?: string;
}

export interface SupabaseClient {
  from: (table: string) => {
    select: (columns?: string) => {
      eq: (column: string, value: any) => {
        single: () => Promise<{data: any | null, error: any | null}>;
        order: (column: string, options?: {ascending?: boolean}) => {
          limit: (limit: number) => Promise<{data: any[], error: any | null}>;
        };
      };
      match: (params: Record<string, any>) => {
        order: (column: string, options?: {ascending?: boolean}) => {
          limit: (limit: number) => Promise<{data: any[], error: any | null}>;
        };
      };
    };
    insert: (data: any) => Promise<{data: any | null, error: any | null}>;
    update: (data: any) => {
      eq: (column: string, value: any) => Promise<{data: any | null, error: any | null}>;
    };
    delete: () => {
      eq: (column: string, value: any) => Promise<{data: any | null, error: any | null}>;
    };
  };
  auth: {
    getUser: () => Promise<{data: {user: User | null}, error: any | null}>;
    getSession: () => Promise<{data: {session: any | null}, error: any | null}>;
  };
  storage: {
    from: (bucket: string) => {
      upload: (path: string, file: File) => Promise<{data: any | null, error: any | null}>;
      getPublicUrl: (path: string) => {publicUrl: string};
    };
  };
}

// 모의 Supabase 클라이언트 생성 함수
export function createClient(): SupabaseClient {
  return {
    from: (table: string) => ({
      select: (columns?: string) => ({
        eq: (column: string, value: any) => ({
          single: () => Promise.resolve({ data: null, error: null }),
          order: (column: string, options?: {ascending?: boolean}) => ({
            limit: (limit: number) => Promise.resolve({ data: [], error: null })
          })
        }),
        match: (params: Record<string, any>) => ({
          order: (column: string, options?: {ascending?: boolean}) => ({
            limit: (limit: number) => Promise.resolve({ data: [], error: null })
          })
        })
      }),
      insert: (data: any) => Promise.resolve({ data, error: null }),
      update: (data: any) => ({
        eq: (column: string, value: any) => Promise.resolve({ data, error: null })
      }),
      delete: () => ({
        eq: (column: string, value: any) => Promise.resolve({ data: null, error: null })
      })
    }),
    auth: {
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null })
    },
    storage: {
      from: (bucket: string) => ({
        upload: (path: string, file: File) => Promise.resolve({ data: { path }, error: null }),
        getPublicUrl: (path: string) => ({ publicUrl: `https://example.com/${path}` })
      })
    }
  };
}

// 예제 데이터 생성 함수
export function getMockUser(): User {
  return {
    id: 'usr-123456',
    email: 'example@example.com',
    name: 'Example User',
    avatar_url: 'https://example.com/avatar.png'
  };
}

export function getMockAccount(): Account {
  return {
    account_id: 'acc-123456',
    name: 'Personal Account',
    personal_account: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    owner_id: 'usr-123456'
  };
}
