import { Component, OnInit } from '@angular/core';
import { CepService } from './cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chat';

  constructor(private cepService: CepService) {}

  ngOnInit() {
    const oCepQualquer = this.cepService.getCepQualquer('54420000');
    oCepQualquer.subscribe(res => {
      console.log(res);
    });

  }
}
