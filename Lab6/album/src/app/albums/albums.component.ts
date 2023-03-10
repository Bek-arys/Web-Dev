import { Component, OnInit } from '@angular/core';

import { AlbumsService } from '../albums.service';
import { IAlbum } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  public albums: any = [];
  public newAlbum;
  public title;
  public newId = 100;

  constructor(private _albumsService: AlbumsService) {
    this.newAlbum = {} as IAlbum;
    this.title = "";
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(){
    this._albumsService.getAlbums().subscribe((albums) =>{
      this.albums = albums;
    })
  }

  deleteAlbum(id : number) {
    this._albumsService.deleteAlbums(id).subscribe( () =>{
       this.albums.splice(id,1);
    })
  }

  addAlbum(){
    this.newAlbum.userId = 10;
    this.newAlbum.id = ++this.newId;
    this.newAlbum.title = this.title;
    this._albumsService.addAlbums(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.newAlbum= {} as IAlbum;
    });
  }

  putAlbum(album: IAlbum) {
    album.title = this.title;
    this._albumsService.putAlbums(album).subscribe((album) => {
      console.log(album.title);
    });
    this.title = '';
  }
}
