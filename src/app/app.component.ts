import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Home', url: 'tabs/tab1', icon: 'home' },
    { title: 'Perfil', url: '/tabs/tab2', icon: 'person' },
    { title: 'Cursos', url: 'tabs/tab3', icon: 'school' },
 { title: 'Favoritos', url: '/intro', icon: 'heart' },

  ];
  public labels = ['Inversión', 'Criptomonedas', 'Forex', 'CDT'];
  constructor() {}
}