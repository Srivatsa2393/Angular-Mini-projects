import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges{
    visibleImages: any[] = [];
    title = 'Recent Photos';

    constructor(private imageService: ImageService) {
        this.visibleImages = this.imageService.getImages();
    }

    ngOnChanges() {

    }
}   
