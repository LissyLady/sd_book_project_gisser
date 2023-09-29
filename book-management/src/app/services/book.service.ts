import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
    providedIn: 'root',
})
export class BookService {
    private books: Book[] = [];

    getBooks(): Book[] {
        return this.books;
    }

    addBook(book: Book) {
        this.books.push(book);
    }

    editBook(index: number, book: Book) {
        this.books[index] = book;
    }

    deleteBook(index: number) {
        this.books.splice(index, 1);
    }
}