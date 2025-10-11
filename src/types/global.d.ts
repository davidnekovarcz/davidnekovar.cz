// Global type definitions for window object extensions
declare global {
  interface Window {
    trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  }
}

export {};
