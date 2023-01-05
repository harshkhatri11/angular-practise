import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonServerComponentService } from '../json-server-component.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.scss'],
})
export class CrudDialogComponent implements OnInit {
  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  actionbtn: string = 'Save';
  productForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private jsonservice: JsonServerComponentService,
    private dialogRef: MatDialogRef<CrudDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['', Validators.required],
    });

    if (this.editData) {
      this.actionbtn = 'Update';
      this.productForm.controls['productName'].setValue(
        this.editData.productName
      );
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['comment'].setValue(this.editData.comment);
    }
  }

  addProduct() {
    if (!this.editData) {
      if (this.productForm.valid) {
        console.log(this.productForm.value);
        this.jsonservice.postProduct(this.productForm.value).subscribe({
          next: (res) => {
            this.serviceService.openSuccessSnackBar(
              'Product added successfully',
              'ok'
            );
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error: (res) => {
            this.serviceService.openFailureSnackBar(
              'Error While adding Product data',
              'Try again !!'
            );
          },
        });
      }
    } else {
      this.upateProduct();
    }
  }

  upateProduct() {
    this.jsonservice
      .putProduct(this.productForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          this.serviceService.openSuccessSnackBar(
            'Data Updated successfully',
            'ok'
          );
          this.productForm.reset();
          this.dialogRef.close('update');
        },
        error: (err) => {
          this.serviceService.openFailureSnackBar(
            'Error while updating data',
            'Try again !!'
          );
        },
      });
  }
}
