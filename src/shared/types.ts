

export type Book = {
  key: string;
  bookName: string;
  coverNumber: number;
  authorName?: string;
  firstPublishedYear?: string;
  lastPublishedYear?: string;
  isbn?: string;
  editionKey: string;
  numberOfPages?: number;
};