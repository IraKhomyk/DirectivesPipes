import {Component} from '@angular/core';
import { GhostLoadingDirective } from './ghost-loading.directive';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.scss']
})

export class CustomDirectivesComponent {
  isLoading = false;
  isHidden = true;
}
