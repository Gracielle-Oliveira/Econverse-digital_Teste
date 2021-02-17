import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  constructor(private http: HttpClient) { }


  //Endpoint para conexão da API da lista de usuários//
  produtos: any = []
  selectedItem:any = {}

  ngOnInit(): void {

    this.http.get('http://econverse.digital/teste-front-end/junior/ninja-som/lista-produtos/produtos.json').toPromise().then((users) => {

      this.produtos = users;
    })
  }

}

  
    
  
  
    
    