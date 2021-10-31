export default {
  projections: {
    BtBookE: {
      book: {
        __caption__: 'Book',
        title: {
          __caption__: 'Title'
        }
      }
    },
    BtBookL: {
      book: {
        __caption__: 'Title',
        title: {
          __caption__: 'Title'
        },
        author: {
          __caption__: 'Author'
        },
        pagesCount: {
          __caption__: 'Pages'
        },
        urlCover: {
          __caption__: 'UrlCover'
        },
        urlDescription: {
          __caption__: 'UrlDescription'
        },
        tags: {
          __caption__: 'UrlTags'
        },
        averageRating: {
          __caption__: 'AverageRating'
        }
      }
    }
  },
  validations: {
    book: {
      __caption__: 'Book'
    }
  }
};
