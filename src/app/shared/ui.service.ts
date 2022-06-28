import { Subject } from 'rxjs';

export class UiService {
  isLoadingChanged = new Subject<boolean>();
}
