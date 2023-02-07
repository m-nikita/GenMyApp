import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gen-post',
  templateUrl: './gen-post.component.html',
  styleUrls: ['./gen-post.component.scss']
})
export class GenPostComponent {
  error : string = "";
  generationVisible : boolean = true;
  multiplePost : boolean = false;
  historyVisible : boolean = false;

  switchContent(type : String) {
    switch(type) {
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
    if(!f.valid) {
      this.error = "Le formulaire n'est pas valide ! Des champs requis sont manquants !";
    } else {
      
    }
  }
}
