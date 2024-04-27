import { Component } from '@angular/core';
import { CabecalhoComponent } from "../cabecalho/cabecalho.component";

@Component({
    selector: 'app-pagina1',
    standalone: true,
    templateUrl: './pagina1.component.html',
    styleUrl: './pagina1.component.scss',
    imports: [CabecalhoComponent]
})
export class Pagina1Component {

}
