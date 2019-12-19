import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateGoodsComponent } from './goods/create-goods/create-goods.component';
import { EditGoodsComponent } from './goods/edit-goods/edit-goods.component';
import { DeleteGoodsComponent } from './goods/delete-goods/delete-goods.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  createGoods(): void {
    const dialogRef = this.dialog.open(CreateGoodsComponent, { panelClass: 'createGoods-dialogue-style', width: '60vw', maxWidth: 'unset', height: 'auto' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('CreateGoodsComponent was closed');

    });
  }

  editGoods(): void {
    const dialogRef = this.dialog.open(EditGoodsComponent, { panelClass: 'editGoods-dialogue-style' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('editGoodsComponent was closed');
    })
  }

  deleteGoods(): void {
    const dialogRef = this.dialog.open(DeleteGoodsComponent, { panelClass: 'deleteGoods-dialogue-style' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('DeleteGoodsComponent was closed');
    })
  }

  ngOnInit() {
  }



}
