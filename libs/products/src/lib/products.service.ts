import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getAllProducts() {
        return 'This action returns all products';
    }
}
