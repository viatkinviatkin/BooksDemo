export default {
  projections: {
    BtBookE: {
      book: {
        __caption__: 'book',
        title: {
          __caption__: 'title'
        }
      }
    },
    BtBookL: {
      book: {
        __caption__: 'book',
        title: {
          __caption__: 'title'
        },
        author: {
          __caption__: 'author'
        },
        pagesCount: {
          __caption__: 'pagesCount'
        },
        urlCover: {
          __caption__: 'urlCover'
        },
        urlDescription: {
          __caption__: 'urlDescription'
        },
        tags: {
          __caption__: 'tags'
        },
        averageRating: {
          __caption__: 'averageRating'
        }
      }
    }
  },
  validations: {
    book: {
      __caption__: 'book'
    }
  }
};
