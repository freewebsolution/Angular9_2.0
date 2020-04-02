import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../../model/book';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {BookService} from '../../service/book.service';
const ApiUrl = 'http://localhost:3000/books';
@Component({
  selector: 'app-form',
  template: `
    <form #f="ngForm" (submit)="save(f)">
      <div class="form-group">
        <input [ngModel]="active?.title" type="text" class="form-control" name="title" placeholder="Insert title..." required>
      </div>
      <div class="form-group">
        <input [ngModel]="active?.author" type="text" class="form-control" name="author" placeholder="Insert author..." required>
      </div>
      <div class="form-group">
        <input [ngModel]="active?.price" type="number" class="form-control" name="price" placeholder="Insert price..." required>
      </div>
      <div class="form-group">
        <input [ngModel]="active?.isbn" type="text" class="form-control" name="isbn" placeholder="Insert isbn..." required>
      </div>
      <div class="form-group">
              <textarea [ngModel]="active?.description" class="form-control" rows="3" name="description"
                        placeholder="Insert description..." required></textarea>
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
      <input *ngIf="this.imageSrc" [ngModel]="this.imageSrc" type="hidden" name="img" required>
      <input *ngIf="active" [ngModel]="active.img" type="hidden" name="img" required>
      <button type="submit" class="btn btn-outline-warning btn-sm mr-1" [disabled]="f.invalid">{{active ? 'EDIT' : 'ADD'}}</button>
      <button type="button" class="btn btn-outline-success btn-sm mr-1" (click)="reset(f)">RESET</button>
    </form>
  `,
  styles: [`
    .btn-sm {
      padding: .25rem .5rem;
      font-size: .875rem;
      line-height: 1.5;
      border-radius: .2rem;
    }
  `]
})
export class FormComponent implements OnInit {
  @Input() active: Book;
  @Input() books: Book[];
  @Output() resetClick: EventEmitter<Book> = new EventEmitter<Book>();
  imageSrc: string;

  save(form: NgForm) {
    if (this.active) {
      this.edit(form);
    } else {
      this.add(form);
    }
  }

  add(form: NgForm) {
    this.bookService.addBook(form)
      .subscribe((res: Book) => {
        setTimeout(() => {
          this.books.push(res);
        }, 500);
        location.reload();
        form.reset();
        this.imageSrc = null;
      });
  }

  edit(form: NgForm) {
    this.bookService.editBook(form, this.active)
      .subscribe(res => {
        const index = this.books.findIndex(b => b.id === this.active.id);
        this.books[index] = res;
        location.reload();
      });
  }
  reset(form: NgForm) {
    this.active = null;
    this.books = null;
    this.imageSrc = null;
    this.resetClick.emit();
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
  constructor(private http: HttpClient, private bookService: BookService) {}

  ngOnInit(): void {}

}
