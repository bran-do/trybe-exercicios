type ServiceResponseError = { message: string };
export type ServiceResponse<T> = { status: string, data: T | ServiceResponseError };