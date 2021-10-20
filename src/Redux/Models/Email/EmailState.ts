import { ApiOperation } from "../ApiOperation";

export class EmailState {
  emailOperation: ApiOperation;
  constructor() {
    this.emailOperation = new ApiOperation();
  }
}