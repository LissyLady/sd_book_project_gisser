import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css'],
})
export class BookDialogComponent implements OnInit {
  book: Book = new Book('', '', 0, '', '');

  constructor(public dialogRef: MatDialogRef<BookDialogComponent>) {}

  ngOnInit() {}

  saveBook() {
    this.dialogRef.close(this.book);
  }

  cancel() {
    this.dialogRef.close();
  }
}