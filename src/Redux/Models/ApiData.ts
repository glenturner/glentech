import { ApiError } from "./ApiError";

export class ApiData<T> {

    loading: boolean;
    deleting: boolean;
    data: T | null;
    error: ApiError | null;
    private initialValue: T | null;
    private loadingValue: T | null;

    constructor(initialValue: T | null = null, loadingValue: T | null = initialValue) {
        this.loading = false;
        this.deleting = false;
        this.data = initialValue;
        this.error = null;
        this.initialValue = initialValue;
        this.loadingValue = loadingValue;
    }

    // For below methods: cannot spread because it leaves off the methods

    startLoading(loadingValue: T | null = null): ApiData<T> {
        const out = new ApiData<T>(this.initialValue, this.loadingValue)
        out.loading = true
        out.data = loadingValue || this.loadingValue
        return out;
    }

    startDeleting(loadingValue: T | null = null): ApiData<T> {
        const out = new ApiData<T>(this.initialValue, this.loadingValue)
        out.deleting = true
        out.data = loadingValue || this.loadingValue
        return out;
    }

    deleteSucceeded(idx?: number): ApiData<T> {
        const out = new ApiData<T>(this.data)
        if (idx) {
            const dataAsArray: any[] = out.data as any
            dataAsArray.splice(idx, 1)
            out.data = dataAsArray as unknown as T
        }
        out.deleting = false;
        return out;
    }

    succeeded(data: T): ApiData<T> {
        const out = new ApiData<T>(this.initialValue, this.loadingValue)
        out.data = data
        return out;
    }

    failed(error: any, data: T | null = this.initialValue): ApiData<T> {
        // If the request has been cancelled, just keep the data object the way it is
        if (error.isCancel) return this;
        const out = new ApiData<T>(this.initialValue, this.loadingValue)
        out.data = this.initialValue
        out.error = error
        return out;
    }

    reset(): ApiData<T> {
        return new ApiData<T>(this.initialValue, this.loadingValue);
    }
}