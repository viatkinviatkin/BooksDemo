export default {
  projections: {
    BtSpeakerE: {
      speaker: {
        __caption__: ''
      }
    },
    BtSpeakerL: {
      speaker: {
        __caption__: 'LastName',
        lastName: {
          __caption__: 'LastName'
        },
        firstName: {
          __caption__: 'FirstName'
        },
        middleName: {
          __caption__: 'MiddleName'
        }
      }
    }
  },
  validations: {
    speaker: {
      __caption__: 'speaker'
    }
  }
};
