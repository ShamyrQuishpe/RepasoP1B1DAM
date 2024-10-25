import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  visualizarPDF(){
    window.open('https://drive.google.com/file/d/1dor__xrCpgDaW46es_0AfodVOJaNStN3/view?usp=drive_link','_blank')
  }

  showContent(contactInfo: string){
    alert(contactInfo)
  }


}
