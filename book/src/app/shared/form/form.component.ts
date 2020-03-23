import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
const ApiUrl = 'http://localhost:3000/books';
@Component({
  selector: 'app-form',
  template: `
    <form #f="ngForm" (submit)="save(f)">
      <div class="form-group">
        <input [ngModel]="active?.title" type="text" class="form-control" name="title" placeholder="Insert title...">
      </div>
      <div class="form-group">
        <input [ngModel]="active?.author" type="text" class="form-control" name="author" placeholder="Insert author...">
      </div>
      <div class="form-group">
        <input [ngModel]="active?.price" type="number" class="form-control" name="price" placeholder="Insert price...">
      </div>
      <div class="form-group">
        <input [ngModel]="active?.isbn" type="text" class="form-control" name="isbn" placeholder="Insert isbn...">
      </div>
      <div class="form-group">
              <textarea [ngModel]="active?.description" class="form-control" rows="3" name="description"
                        placeholder="Insert description..."></textarea>
      </div>
      <div class="form-group">
        <input style="display: none" type="file" class="form-control" name="img" (change)="readUrl($event)" #selectedFile>
      </div>
      <div class="mb-3">
        <img *ngIf="active" [src]="active?.img" height="130">
        <img *ngIf="this.imageSrc" [src]="this.imageSrc" height="130">
        <button type="button" class="btn btn-outline-warning btn-sm ml-1" (click)="selectedFile.click()">
          SELECT IMAGE
        </button>
      </div>
      <input *ngIf="this.imageSrc" [ngModel]="this.imageSrc" type="hidden" name="img">
      <input *ngIf="active" [ngModel]="active.img" type="hidden" name="img">
      <button type="submit" class="btn btn-outline-warning btn-sm mr-1">{{active ? 'EDIT' : 'ADD'}}</button>
      <button type="button" class="btn btn-outline-success btn-sm mr-1" (click)="reset(f)">RESET</button>
    </form>
  `,
  styles: []
})
export class FormComponent implements OnInit {
  @Input() active: Book;
  @Input() books: Book[];
  imageSrc: string;

  save(form: NgForm) {
    if (this.active) {
      this.edit(form);
    } else {
      this.add(form);
    }
  }

  add(form: NgForm) {
    this.http.post<Book>(`${ApiUrl}`, form.value)
      .subscribe((res: Book) => {
        this.books.push(res);
        form.reset();
        this.imageSrc = null;
      });
  }

  edit(form: NgForm) {
    this.http.patch<Book>(`${ApiUrl}/${this.active.id}`, form.value)
      .subscribe(res => {
        const index = this.books.findIndex(b => b.id === this.active.id);
        this.books[index] = res;
      });
  }
  reset(form: NgForm) {
    this.active = null;
    this.imageSrc = null;
    form.reset();
  }

  readUrl(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      if (this.active) {
        reader.onload = () => {
          this.active.img = reader.result as string;
        };
      } else {
        reader.onload = () => {
          this.imageSrc = reader.result as string;
        };
      }
    }

  }
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}
