// 스레드 관련 작업을 위한 모의 기능 구현
// 이 파일은 빌드 오류를 해결하기 위한 목적으로 작성되었습니다.

export async function generateThreadName(prompt: string): Promise<string> {
  // 간단한 생성 로직, 실제로는 더 복잡한 로직이 있을 수 있습니다.
  if (!prompt || prompt.trim() === '') {
    return "New conversation";
  }
  
  // 프롬프트에서 의미 있는 제목 추출
  const cleanPrompt = prompt.trim();
  const firstSentence = cleanPrompt.split(/[.!?]/)[0];
  
  if (firstSentence.length <= 50) {
    return firstSentence;
  }
  
  // 너무 길면 첫 50자와 "..." 추가
  return firstSentence.substring(0, 50) + "...";
}

export async function getThreadById(threadId: string) {
  // 모의 데이터 반환
  return {
    id: threadId,
    title: `Thread ${threadId}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    messages: []
  };
}

export async function getAllThreads() {
  // 모의 데이터 목록 반환
  return [
    {
      id: 'thread-1',
      title: 'Example Thread 1',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 'thread-2',
      title: 'Example Thread 2',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];
}

export async function createNewThread(title: string) {
  // 모의 스레드 생성
  return {
    id: `thread-${Math.random().toString(36).substring(2, 9)}`,
    title,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    messages: []
  };
}

export async function updateThreadTitle(threadId: string, title: string) {
  // 모의 스레드 제목 업데이트
  return {
    id: threadId,
    title,
    updated_at: new Date().toISOString()
  };
}

export async function deleteThread(threadId: string) {
  // 모의 스레드 삭제
  return { success: true, threadId };
}

export async function getMessagesForThread(threadId: string) {
  // 모의 메시지 목록 반환
  return [
    {
      id: 'msg-1',
      thread_id: threadId,
      content: "Hello, how can I help you today?",
      role: "assistant",
      created_at: new Date(Date.now() - 60000).toISOString()
    },
    {
      id: 'msg-2',
      thread_id: threadId,
      content: "I need help with my project.",
      role: "user",
      created_at: new Date().toISOString()
    }
  ];
}

export async function addMessageToThread(threadId: string, content: string, role: 'user' | 'assistant') {
  // 모의 메시지 추가
  return {
    id: `msg-${Math.random().toString(36).substring(2, 9)}`,
    thread_id: threadId,
    content,
    role,
    created_at: new Date().toISOString()
  };
}
