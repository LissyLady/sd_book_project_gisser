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

    searchText: string = '';
    sortOption: string = 'title';
    sortDirection: string = 'asc';

    get filteredBooks(): Book[] {
        return this.books
            .filter((book) =>
                book.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
                book.author.toLowerCase().includes(this.searchText.toLowerCase()) ||
                book.isbn.includes(this.searchText)
            )
            .sort((a, b) => {
                const valA = (a as any)[this.sortOption];
                const valB = (b as any)[this.sortOption];

                if (this.sortDirection === 'asc') {
                    return valA.localeCompare(valB);
                } else {
                    return valB.localeCompare(valA);
                }
            });
    }
}