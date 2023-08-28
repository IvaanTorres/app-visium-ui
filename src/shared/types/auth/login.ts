export type LoginType = {
  access_token: {
    token: string;
    expires_in: number;
  },
  refresh_token: {
    token: string;
    expires_in: number;
  },
}