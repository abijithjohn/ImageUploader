import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imageuploader',
  templateUrl: './imageuploader.component.html',
  styleUrls: ['./imageuploader.component.scss']
})
export class ImageuploaderComponent implements OnInit {

  @Input() imageURL: string
  // @Output() onChange = new EventEmitter()
  public imagePath;
  imgURL: any;
  public message: string;

  constructor() { }

  ngOnInit(): void {
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  // Function to get and emit value on textarea
  onValueChange(imgURL: string) {
    this.imageURL = imgURL;
    // this.onChange.emit(this.imageURL);
  }
}
