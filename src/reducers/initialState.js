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
    bagrut: {
      [UUID()]: {
        study: 'מתמטיקה',
        grade: '',
        minNumOfUnits: 3,
        numOfUnits: 3
      },
      [UUID()]: {
        study: 'אנגלית',
        grade: '',
        minNumOfUnits: 3,
        numOfUnits: 3
      },
      [UUID()]: {
        study: 'ספרות עברית',
        grade: '',
        minNumOfUnits: 2,
        numOfUnits: 2
      },
      [UUID()]: {
        study: 'הבעה עברית',
        grade: '',
        minNumOfUnits: 2,
        numOfUnits: 2
      },
      [UUID()]: {
        study: 'היסטוריה',
        grade: '',
        minNumOfUnits: 2,
        numOfUnits: 2
      },
      [UUID()]: {
        study: 'תנך',
        grade: '',
        minNumOfUnits: 2,
        numOfUnits: 2
      },
      [UUID()]: {
        study: 'אזרחות',
        grade: '',
        minNumOfUnits: 2,
        numOfUnits: 2
      },
      extendedStudies: {}
    },
    psychometry: {
      grade: ''
    }

  }
};
