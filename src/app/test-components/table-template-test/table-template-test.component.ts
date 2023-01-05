import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { TestComponentService } from '../test-component.service';

@Component({
  selector: 'app-table-template-test',
  templateUrl: './table-template-test.component.html',
  styleUrls: ['./table-template-test.component.scss'],
})
export class TableTemplateTestComponent implements OnInit {
  subscription: Subscription | undefined;
  displayColumns = ['id', 'name', 'username', 'email', 'phone', 'company'];

  //:::::::::::if you using static data this will work:::::::::::://

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

  @ViewChild(MatPaginator, { static: false })
  set paginator(value: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = value;
    }
  }

  @ViewChild(MatSort, { static: false })
  set sort(value: MatSort) {
    if (this.dataSource) {
      this.dataSource.sort = value;
    }
  }

  dataSource = new MatTableDataSource();

  constructor(private testService: TestComponentService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.subscription = this.testService.getUserData().subscribe((res) => {
      console.log(res);
      this.dataSource.data = res;
    });
  }

  //:::::::::::if you using static data this will work:::::::::::://

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
