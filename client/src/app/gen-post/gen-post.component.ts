import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClipboardService } from 'ngx-clipboard';
import { VariablesGlobales } from '../variables-globales';

@Component({
  selector: 'app-gen-post',
  templateUrl: './gen-post.component.html',
  styleUrls: ['./gen-post.component.scss']
})
export class GenPostComponent {
  error: string = "";
  generationVisible: boolean = true;
  multiplePost: boolean = false;
  historyVisible: boolean = false;
  allPost: Post[] = [];

  constructor(private vGlobales: VariablesGlobales, private http: HttpClient, private router: Router, private clipboardService: ClipboardService) {
    if (this.vGlobales.token == null) {
      this.router.navigate(['/login']);
    }
  }

  switchContent(type: String) {
    switch (type) {
      case "generation":
        this.generationVisible = true;
        this.historyVisible = false;
        break;
      case "history":
        this.generationVisible = false;
        this.historyVisible = true;
    }
  }

  changeMultiplePost() {
    this.multiplePost = !this.multiplePost;
  }

  reset() {
    this.error = "";
    this.multiplePost = false;
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    this.error = "";
    if (!f.valid) {
      this.error = "Le formulaire n'est pas valide ! Des champs requis sont manquants !";
    } else {
      let index = 1;
      let nbPost = this.multiplePost ? f.value.numberPost : 1;
      let keyWords = `#${f.value.socialMedia}#${f.value.thematic}#${f.value.objective}`;
      f.value.keyWords.split(',').forEach((keyWord: string) => {
        keyWords += `#${keyWord}`;
      })
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
      const body = {
        prompt: `Génère moi une publication pour ${f.value.socialMedia} sur la thématique ${f.value.thematic} dans le but de ${f.value.objective} incluant les mots-clés suivants : ${f.value.keyWords}`
      };
      this.allPost = [];
      for (let i = 1; i <= nbPost; i++) {
        this.http.post<any>(this.vGlobales.urlBack + 'openai/generate/answer', body, { headers }).subscribe(data => {
          this.allPost.push({
            id: index,
            text: data.answer,
            keyWords: keyWords
          });
          index++;
        });
      }
    }
  }

  copyContent(id: string) {
    const p = document.querySelector("#" + id)?.innerHTML;
    if (p != null) {
      this.clipboardService.copyFromContent(p);
    }
  }
}

export interface Post {
  id: number,
  text: string,
  keyWords: string
}
