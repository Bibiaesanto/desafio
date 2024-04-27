import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./cabecalho/cabecalho.component";
import { PrincipalComponent } from "./principal/principal.component";
import { RecursosComponent } from "./recursos/recursos.component";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CabecalhoComponent, PrincipalComponent, RecursosComponent, DepoimentosComponent, FooterComponent]
})
export class AppComponent {
  title = 'desafioMxm';
}
