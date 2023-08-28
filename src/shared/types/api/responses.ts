type SuccessAPIResponse<T> = {
  status_code?: number;
  message: string;
  data: T;
}

type ErrorAPIResponse = {
  error: {
    status_code: number;
    message: string;
  }
}

export type APIResponse<T> = SuccessAPIResponse<T> | ErrorAPIResponse;