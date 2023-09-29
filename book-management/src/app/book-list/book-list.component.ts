import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
    books: Book[] = [];
    selectedBookIndex: number | null = null;

    constructor(private bookService: BookService) { }

    ngOnInit() {
        this.books = this.bookService.getBooks();
    }

    selectBook(index: number) {
        this.selectedBookIndex = index;
    }
}