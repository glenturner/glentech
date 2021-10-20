export interface ApiError {
    errorCode: string,
    errorMessage: string,
    errorNote: string
    response?: any
}