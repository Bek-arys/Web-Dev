import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAlbumDetailed } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos : IAlbumDetailed[];
  id : number;

  constructor(private route: ActivatedRoute,
              private albumsService: AlbumsService) {
    this.photos = [];
    this.id = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.albumsService.getPhotos(this.id).subscribe((photos) => {
        this.photos = photos;
      });
    });
  }
}
