import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ImagePreviewDirective]'
})
export class ImagePreviewDirective  implements AfterViewInit{
  @Input() ImagePreviewDirective: any;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {

      let reader = new FileReader();
      let el = this.el;


      reader.onloadend = function (e) {
          el.nativeElement.src = reader.result;
      };

      if (this.ImagePreviewDirective) {
        //console.log(this.ImagePreviewDirective);
        
          return reader.readAsDataURL(this.ImagePreviewDirective.rawFile);
          //return window.URL.createObjectURL(this.ImagePreviewDirective.rawFile)
      }

  }

}
