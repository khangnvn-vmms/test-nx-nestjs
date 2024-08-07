export class ResponseData <D>{
  statusCode: number;
  message: string;
  data: D|D[];

  constructor(data: D|D[], statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    
    return this;
  }
}