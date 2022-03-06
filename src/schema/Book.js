export default class Book {
  constructor(book) {
    this.id = book?.id ?? null
    this.title = book?.title ?? null
    this.description = book?.description ?? null
    this.authors = book?.authors ?? []
    this.pageCount = book?.pageCount ?? null
    this.category = book?.category ?? null
    this.imageUrl = book?.imageUrl ?? null
    this.isbn10 = book?.isbn10 ?? null
    this.isbn13 = book?.isbn13 ?? null
    this.language = book?.language ?? null
    this.publisher = book?.publisher ?? null
    this.published = book?.published ?? null
  }
}