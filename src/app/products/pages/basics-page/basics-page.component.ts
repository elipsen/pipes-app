import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = 'mi nombre';
  public nameUpper: string = 'MI NOMBRE';
  public fullName: string = 'Mi NoMbRe';

  public customDate: Date = new Date();

}
