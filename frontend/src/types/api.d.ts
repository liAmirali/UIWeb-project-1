type ApiCallStatus<T = unknown> = {
  data: T | null;
  error: string | null;
  isLoading: boolean;
};
