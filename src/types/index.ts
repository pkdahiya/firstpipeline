// Auth types
export interface User {
    id: string;
    email: string;
    name: string;
    role?: UserRole
    avatar?: string;
  }
  

  export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
  }
  
  // Service types
  export interface Service {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    providerId: string;
    rating?: number;
    image?: string;
  }
  
  export interface ClientState {
    services: Service[];
    loading: boolean;
    error: string | null;
  }
  
  export interface ProviderState {
    services: Service[];
    bookings: Booking[];
    loading: boolean;
    error: string | null;
  }
  
  export interface Booking {
    id: string;
    serviceId: string;
    clientId: string;
    date: string;
    status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  }

  export type UserRole = 'client' | 'provider' | 'admin'; // Add other roles as needed
