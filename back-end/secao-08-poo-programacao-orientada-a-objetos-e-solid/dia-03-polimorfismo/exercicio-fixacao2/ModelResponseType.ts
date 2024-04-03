type ModelResponseError = { message: string };
export type ModelResponse<T> = { status: number, data: T | ModelResponseError };