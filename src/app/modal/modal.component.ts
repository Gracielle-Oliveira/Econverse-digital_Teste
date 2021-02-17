import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  selectedItem:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedItem)
  }

}
