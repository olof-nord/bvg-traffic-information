export interface FerryStop {
  line: string;
  stops: string[];
}

export const ferryStops: FerryStop[] = [
  {
    line: 'F10',
    stops: [
      'S Wannsee',
      'Alt-Kladow'
    ]
  },
  {
    line: 'F11',
    stops: [
      'Wilhelmstrand',
      'Baumschulenstr./Fähre'
    ]
  },
  {
    line: 'F12',
    stops: [
      'Müggelbergallee',
      'Wassersportallee'
    ]
  },
  {
    line: 'F21',
    stops: [
      'Krampenburg',
      'Zum Seeblick'
    ]
  },
  {
    line: 'F23',
    stops: [
      'Müggelwerderweg',
      'Müggelhort',
      'Neu Helgoland',
      'Kruggasse'
    ]
  },
  {
    line: 'F24',
    stops: [
      'Spreewiesen',
      'Kruggasse'
    ]
  }
];
