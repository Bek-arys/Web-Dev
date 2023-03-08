import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAlbum, IAlbumDetailed } from './album';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private _url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { 
  }

  getAlbums() : Observable<IAlbum[]>{
    return this.http.get<IAlbum[]>(this._url + '/albums');
  }
  
  getAlbum(id: number): Observable<IAlbum> {
    return this.http.get<IAlbum>(`${this._url}/albums/${id}`)
  }

  getPhotos(id: number): Observable<IAlbumDetailed[]> {
    return this.http.get<IAlbumDetailed[]>(`${this._url}/albums/${id}/photos`)
  }

  deleteAlbums(id : number) : Observable<IAlbum>{
      return this.http.delete<IAlbum>(`${this._url}/albums/${id}`);
  }
  addAlbums(album: IAlbum): Observable<IAlbum> {
    return this.http.post<IAlbum>(`${this._url}/albums`, album);
  }

  putAlbums(album: IAlbum): Observable<IAlbum> {
    return this.http.put<IAlbum>(`${this._url}/albums/${album.id}`, album);
  }
}
