import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Providers/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  productbyid: any;
  id: any;
  constructor(public service: ServiceService, public router: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.service.getProductById(this.id).subscribe((res) => {
      this.productbyid = res;
    });
  }
}
