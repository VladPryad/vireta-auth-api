export {};

declare global {
  namespace Express {
    interface User {
      username: string;
      id?: string;
      profile?: any;
      // Add whatever you're missing
    }
  }
}