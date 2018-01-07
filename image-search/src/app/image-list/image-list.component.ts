import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  handleSuccess(data) {
    this.imagesFound = true;
    console.log(data.hits);
    this.images = data.hits;
  }

  handleError(error) {
    console.log(error);
  }

  searchImages(query: string) {
    this.searching = true;
    return this.imageService.getImage(query)
      .subscribe(
        (data) => {
          //console.log(data);
          this.handleSuccess(data);
        },
        (error) => {
          //console.log(error);
          this.handleError(error);
        },
        () => {
          //console.log('Request Complete');
          this.searching = false;
        }
      );
  }


}
