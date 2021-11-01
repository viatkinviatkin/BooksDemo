export default {
  projections: {
    BtSpeakerE: {
      speaker: {
        __caption__: 'speaker'
      }
    },
    BtSpeakerL: {
      speaker: {
        __caption__: 'speaker',
        lastName: {
          __caption__: 'lastName'
        },
        firstName: {
          __caption__: 'firstName'
        },
        middleName: {
          __caption__: 'middleName'
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
