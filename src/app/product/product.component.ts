import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct, ICartProduct } from '../models';
import { UserService } from '../user.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    productId: string;
    productDetails: IProduct;
    productReceived: boolean = false;
    sizes: Array<string> = new Array<string>();
    @ViewChild('cartButton') cartButton: ElementRef;

    constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private userService: UserService) { 
        //get id parameter from url
        this.activatedRoute.params.subscribe((params) => {
            this.productId = params['id'];
            console.log(`product.component - id retrieved from url params - ${this.productId}`);
        });
    }

    ngOnInit() {
        //request product details from db
        this.productService.getProduct(this.productId).subscribe((res) => {
            console.log(`product.component - received response - ${res}`);
            this.productDetails = res;
            this.sizes = this.productDetails.sizesAvailable.split(",");
            console.log('sizes - ', this.sizes);
            this.productReceived = true;
        });
    }
    
    //add to cart
    addToCart(cartProduct: ICartProduct){
        console.log(`product.component - cartProduct sent - ${cartProduct}`);
        this.userService.updateCartOfUser(cartProduct).subscribe(res => {
            if(res) {
                console.log(`product.component - cart updation response - ${res}`);
                this.cartButton.nativeElement.innerHTML = 'added to cart';
            }
        },
        err => {
            console.log(`product.component - error updating cart column of user - ${err}`);
        });
    }
}
