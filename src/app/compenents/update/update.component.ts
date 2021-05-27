import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Providers/service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  public edit: FormGroup;
  id: any;

  constructor(
    public formbuilder: FormBuilder,
    public service: ServiceService,
    public router: ActivatedRoute,
    public route: Router
  ) {
    this.edit = formbuilder.group({
      name: ['', Validators.required],
      details: [''],
      image: [''],
      price: [, Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.service.getProductById(this.id).subscribe((res) => {
      this.edit.patchValue(res);
    });
  }
  update() {
    const data = this.edit.value;
    this.service.updateProduct(data, this.id).subscribe((res) => {
      this.route.navigateByUrl('/');
    });
  }
}
