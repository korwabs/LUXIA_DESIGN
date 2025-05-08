// 가상 API 응답을 위한 모의 API 코드
// 실제 기능은 없지만 빌드 오류를 해결하기 위한 목적으로 구현

export interface Project {
  id: string;
  name: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

export interface Thread {
  thread_id: string;
  project_id: string;
  title?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Message {
  id: string;
  thread_id: string;
  content: string;
  role: 'user' | 'assistant';
  created_at: string;
}

export class BillingError extends Error {
  detail: any;
  
  constructor(detail: any) {
    super("Billing error");
    this.detail = detail;
    this.name = "BillingError";
  }
}

// 프로젝트 생성 함수
export async function createProject(data: Partial<Project>): Promise<Project> {
  // 모의 응답 반환
  return { 
    id: `project-${Math.random().toString(36).substring(2, 9)}`,
    name: data.name || "New Project",
    description: data.description || "",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

// 스레드 생성 함수
export async function createThread(projectId: string): Promise<Thread> {
  // 모의 응답 반환
  return { 
    thread_id: `thread-${Math.random().toString(36).substring(2, 9)}`,
    project_id: projectId,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}

// 사용자 메시지 추가 함수
export async function addUserMessage(threadId: string, content: string): Promise<Message> {
  // 모의 응답 반환
  return { 
    id: `msg-${Math.random().toString(36).substring(2, 9)}`,
    thread_id: threadId,
    content: content,
    role: 'user',
    created_at: new Date().toISOString()
  };
}

// 에이전트 시작 함수
export async function startAgent(threadId: string, options: any = {}): Promise<any> {
  // 모의 응답 반환
  return { 
    success: true, 
    thread_id: threadId,
    status: "started",
    options
  };
}

// 스레드 이름 생성 함수 - 이 함수는 actions/threads.ts에서 임포트해서 사용하는 것으로 설정
// export async function generateThreadName(prompt: string): Promise<string> {
//   return `Thread about ${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}`;
// }

// 설정 관련 함수들
export const config = {
  SUBSCRIPTION_TIERS: {
    FREE: {
      priceId: 'free-tier',
      name: 'Free',
      maxThreads: 10,
      maxProjects: 5,
      maxStorage: 100 * 1024 * 1024, // 100MB
    },
    PRO: {
      priceId: 'pro-tier',
      name: 'Pro',
      maxThreads: 100,
      maxProjects: 50,
      maxStorage: 1024 * 1024 * 1024, // 1GB
    },
    ENTERPRISE: {
      priceId: 'enterprise-tier',
      name: 'Enterprise',
      maxThreads: -1, // Unlimited
      maxProjects: -1, // Unlimited
      maxStorage: 10 * 1024 * 1024 * 1024, // 10GB
    }
  }
};

// 로컬 모드 확인 함수
export function isLocalMode(): boolean {
  if (typeof window === 'undefined') return false;
  return window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}
