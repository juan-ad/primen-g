import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }

  getFiles(): Observable<TreeNode[]>{
    return this.http.get<TreeNode[]>('assets/files.json');
  }

  getLazyFiles(): Observable<TreeNode[]>{
    return this.http.get<TreeNode[]>('assets/files-lazy.json');
  }
}
