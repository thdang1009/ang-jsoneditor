import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'projects/ang-jsoneditor/src/public-api';

@Component({
  selector: 'app-show',
  template: '<div>{{showData()}}</div>'
})
export class ShowComponent {

  @Input()
  public data;

  showData(){
    return JSON.stringify(this.data, null, 2);
  }

}
