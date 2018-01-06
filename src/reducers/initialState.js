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
        numOfUnits: 3
      },
      [UUID()]: {
        study: 'אנגלית',
        grade: '',
        numOfUnits: 3
      },
      [UUID()]: {
        study: 'ספרות עברית',
        grade: '',
        numOfUnits: 2
      },
      [UUID()]: {
        study: 'הבעה עברית',
        grade: '',
        numOfUnits: 2
      },
      [UUID()]: {
        study: 'היסטוריה',
        grade: '',
        numOfUnits: 2
      },
      [UUID()]: {
        study: 'תנך',
        grade: '',
        numOfUnits: 2
      },
      [UUID()]: {
        study: 'אזרחות',
        grade: '',
        numOfUnits: 2
      },
      extendedStudies: {}
    },
    psychometry: {
      grade: ''
    }

  }
};
