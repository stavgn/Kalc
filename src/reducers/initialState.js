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
    [UUID()]: {
      name: 'מתמטיקה',
      grade: '',
      numOfUnits: 3
    },
    [UUID()]: {
      name: 'אנגלית',
      grade: '',
      numOfUnits: 3
    },
    [UUID()]: {
      name: 'ספרות עברית',
      grade: '',
      numOfUnits: 2
    },
    [UUID()]: {
      name: 'הבעה עברית',
      grade: '',
      numOfUnits: 2
    },
    [UUID()]: {
      name: 'היסטוריה',
      grade: '',
      numOfUnits: 2
    },
    [UUID()]: {
      name: 'תנך',
      grade: '',
      numOfUnits: 2
    },
    [UUID()]: {
      name: 'אזרחות',
      grade: '',
      numOfUnits: 2
    },
    ExtendedStudies: []
  }
};
