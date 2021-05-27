import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Providers/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  produit: any;
  srch: any;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.service.getProducts().subscribe((res) => {
      this.produit = res;
    });
  }

  deleteProduct(product: any) {
    this.service.deleteProduct(product.id).subscribe(() => {
      this.getAllProduct();
    });
  }

  search() {
    this.service.searchProduct(this.srch).subscribe((res) => {
      this.produit = res;
    });
  }
}
