const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  video_url?: string;
  explanation?: string;
  duration?: number;
  created_at: string;
}

export interface Chat {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface ChatDetail {
  id: string;
  title: string;
  messages: Message[];
  created_at: string;
}

export interface GenerateResponse {
  chat_id: string;
  message_id: string;
  video_url: string;
  explanation: string;
  duration: number;
  created_at: string;
}

export class ApiClient {
  private baseUrl: string;
  private userId: string | null = null;

  constructor(baseUrl: string = API_URL) {
    this.baseUrl = baseUrl;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    if (this.userId) {
      headers['X-User-ID'] = this.userId;
    }
    return headers;
  }

  async createOrGetUser(clerkId: string, email: string, fullName?: string) {
    const response = await fetch(`${this.baseUrl}/users`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        clerk_id: clerkId,
        email: email,
        full_name: fullName,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create/get user');
    }

    return response.json();
  }

  async generateAnimation(prompt: string, chatId?: string): Promise<GenerateResponse> {
    const response = await fetch(`${this.baseUrl}/generate`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({
        prompt,
        chat_id: chatId,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to generate animation');
    }

    return response.json();
  }

  async getChatHistory(): Promise<Chat[]> {
    const response = await fetch(`${this.baseUrl}/chats`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch chat history');
    }

    return response.json();
  }

  async getChatDetail(chatId: string): Promise<ChatDetail> {
    const response = await fetch(`${this.baseUrl}/chats/${chatId}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch chat detail');
    }

    return response.json();
  }

  async deleteChat(chatId: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/chats/${chatId}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete chat');
    }
  }
}

export const apiClient = new ApiClient();