import { OrderService } from '../order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../shared/models/order.model';
import { Location } from '@angular/common';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order: Order;
  loading: boolean;
  action: string;
  constructor(private route: ActivatedRoute,
             private orderService: OrderService,
             private location: Location,
             private notificationService: NotifierService
             ) { }

  ngOnInit() {
    this.loading = true;
    this.action = this.route.snapshot.data['action'];
    if (this.action === 'edit') {
      const id = +this.route.snapshot.paramMap.get('id');
      if (this.orderService.isReady) {
        this.orderService.getOrderById(id)
          .subscribe(order => { this.order = order; console.log(JSON.stringify(order)); this.loading = false; });
      }
      this.orderService.ordersReady$.subscribe(x => {
        this.orderService.getOrderById(id)
          .subscribe(order => { this.order = order; console.log(JSON.stringify(order)); this.loading = false; });
      });
    }

    if (this.action === 'create') {
      this.order = null;
      this.loading = false;
    }
  }

  onUpdate() {
    this.loading = true;
    this.orderService.updateOrder(this.order).subscribe(res => {
      this.loading = false;
      this.location.back();
      this.notificationService.notify('success', `${this.order.id} updated successfully`);
    });
  }

  onCreate() {
    this.loading = true;
    this.orderService.createOrder(this.order).subscribe(res => {
      this.loading = false;
      this.location.back();
      this.notificationService.notify('success', `${res.id} added successfully`);
     });
  }
}
