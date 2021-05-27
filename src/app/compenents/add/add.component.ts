import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Providers/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  public add: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public service: ServiceService,
    public router: Router
  ) {
    this.add = formbuilder.group({
      name: ['', Validators.required],
      details: [''],
      image: [''],
      price: [, Validators.required],
    });
  }

  ngOnInit(): void {}
  onadd() {
    const data = this.add.value;
    this.service.createProduct(data).subscribe((res) => {
      this.router.navigateByUrl('/');
    });
  }
}
