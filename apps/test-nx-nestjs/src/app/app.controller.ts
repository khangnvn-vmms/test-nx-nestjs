import { ProductsService } from '@test-nx-nestjs/products';
import { Controller, Get} from '@nestjs/common';

import { AppService } from './app.service';

@Controller('')
export class AppController {
  

  constructor(private appService: AppService, private ProductsService: ProductsService) {}
@Get()  
getData() {
  return this.appService.getData();
}

@Get('products')  
getAllProducts() {
  return this.ProductsService.getAllProducts();
}
}
