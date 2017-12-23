import UUID from 'uuid/v4';

export default {
  universities: {
    [UUID()]: {
      name: 'Technion',
      shouldCalculate: false,
      sechem: ''
    },
    [UUID()]: {
      name: 'BGU University',
      shouldCalculate: false,
      sechem: ''
    },
    [UUID()]: {
      name: 'The Hebrew University',
      shouldCalculate: false,
      sechem: ''
    },
    [UUID()]: {
      name: 'Tel-Aviv University',
      shouldCalculate: false,
      sechem: ''
    },
  },
  userTypedGrades: {

  }
};
