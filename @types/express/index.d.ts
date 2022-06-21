// import USER_MODEL from ''

declare namespace Express {
  export interface Request {
    user?: { id: number }; // USER_MODEL
  }
}
