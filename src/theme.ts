const theme = {
  mainText: '#111111',
  menuText: '#203f9b',
  inputBorder: '#adb5bd',
  dateBorder: '#f1f3f5',
  notifyMessage_01: '#868e96',
  notifyMessage_02: '#ced4da',
  errorMessage: '#ff6679',

  buttonBackground: '#203f9b',
  dateBackground: '#f8f9fa',

  Color: {
    n1: '#ffdd0a',
    n2: '#a9186d',
    n3: '#34524f',
    n4: '#274b90',
    n5: '#c85b52',
    n6: '#438ca9',
    n7: '#fd9364',
    n8: '#8971b3',
  },

  Font: {
    EB: 'NanumSquareEB',
    B: 'NanumSquareB',
    R: 'NanumSquareR',
    L: 'NanumSquareL',
  },
};

export interface ITheme {
  mainText: string;
  menuText: string;
  inputBorder: string;
  dateBorder: string;
  notifyMessage_01: string;
  notifyMessage_02: string;
  errorMessage: string;

  buttonBackground: string;
  dateBackground: string;

  Color: {
    n1: string;
    n2: string;
    n3: string;
    n4: string;
    n5: string;
    n6: string;
    n7: string;
    n8: string;
  };

  Font: {
    EB: string;
    B: string;
    R: string;
    L: string;
  };
}

export default theme;
