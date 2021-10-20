
export class ApiOperation {

    loading: boolean;
    success: boolean;
    error: any;

    constructor() {
        this.loading = false;
        this.success = false;
        this.error = null;
    }

    // For below methods: cannot spread because it leaves off the methods

    startLoading(): ApiOperation {
        const out = new ApiOperation();
        out.loading = true;
        return out;
    }

    succeeded(): ApiOperation {
        const out = new ApiOperation();
        out.success = true;
        return out;
    }

    failed(error: any): ApiOperation {
        const out = new ApiOperation();
        out.success = false
        out.error = error
        return out;
    }

    reset(): ApiOperation { return new ApiOperation() }
}