import { BookFilterPipe } from './book-filter.pipe';

describe('BookFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should find an existing book', () => {
    const BOOK = {
      title: 'No books found',
      isbn: '',
      price: 0,
      coverUrl: '',
      rating: 0,
    };

    const pipe = new BookFilterPipe();
    const result = pipe.transform([BOOK], 'FOUND');
    expect(result).toEqual([BOOK]);
  });
});
