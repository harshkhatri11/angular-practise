import { ChangeDetectorRef, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from './employee.service';
import * as moment from 'moment';
import { Employee } from './employee';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmployeeComponent } from 'src/app/material component/dialog/employee/employee.component';
import { ConfirmationComponent } from 'src/app/material component/dialog/confirmation/confirmation.component';
import { ServiceService } from 'src/app/service.service';



@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})


export class EmployeeManagementComponent implements OnInit, OnDestroy {


  //displayedColumns:string[]=['firstName','lastName','edit'];
  employees: any = [];
  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }
  obs !: Observable<any>;
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.employees);
  //dataSource:any;

  constructor(
    public employeeService: EmployeeService,
    private changeDetectorRef: ChangeDetectorRef,
    private dialog: MatDialog,
    private router: Router,
    private serviceService: ServiceService
  ) { }

  ngOnInit() {
    this.cardData();
  }

  cardData() {
    let userData: any = [];
    this.employeeService.getEmployees().subscribe((res: any) => {
      res.forEach((element: any) => {
        userData.push(element);
      });
      this.employees = [...userData];
      this.dataSource = new MatTableDataSource(this.employees);
      this.changeDetectorRef.detectChanges();
      this.obs = this.dataSource.connect();
    },(error:any)=>{
      this.serviceService.openFailureSnackBar("Something went wrong while fetching data","Try again");
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  handleEditAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: "Edit",
      data: values
    }
    dialogConfig.width = '900px';
    const dialogRef = this.dialog.open(EmployeeComponent, dialogConfig);

    this.router.events.subscribe(() => {
      dialogRef.close();
    })

    const sub = dialogRef.componentInstance.onEditProduct.subscribe(
      (response: any) => {
        this.cardData();
      }
    )
  }

  handleAddAction() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      action: "Add"
    }
    dialogConfig.width = '900px';
    const dialogRef = this.dialog.open(EmployeeComponent, dialogConfig);

    this.router.events.subscribe(() => {
      dialogRef.close();
    })

    const sub = dialogRef.componentInstance.onAddProduct.subscribe(
      (response: any) => {
        this.cardData();
      }
    )
  }

  handleDeleteAction(values: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      message: 'delete ' + values.firstName +" "+values.lastName
    };

    const dialogRef = this.dialog.open(ConfirmationComponent, dialogConfig);
    const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((response) => {
      this.deleteEmployee(values.id);
      dialogRef.close();
      this.serviceService.openSuccessSnackBar("Employee deleted successfully","Ok");
    },(error)=>{
      this.serviceService.openFailureSnackBar("Something went wrong","Try again");
    })
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id).subscribe((responsee: any) => {
      this.cardData();
    })
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
