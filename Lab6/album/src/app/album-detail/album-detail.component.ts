import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IAlbum } from '../album';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit{

  album: IAlbum = {} as IAlbum
  title: string;

  constructor(private activateRoute: ActivatedRoute, private _albumsService: AlbumsService){
    this.title = "";
  }

  saveTitle() {
    this.album.title = this.title;
    this.title = '';
    
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this._albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    })
  }
}
