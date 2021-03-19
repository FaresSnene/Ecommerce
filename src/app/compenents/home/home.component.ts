import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Providers/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  produit: any;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((res) => {
      this.produit = res;
      console.log(res);
    });
  }
}
