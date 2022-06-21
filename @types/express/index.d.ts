// import USER_MODEL from ''

declare namespace Express {
  export interface Request {
    user?: { a: string, b: number }; // USER_MODEL
  }
}
