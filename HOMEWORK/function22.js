const pupils = [
  { name: 'John', percentage: 80 },
  { name: 'Jane', percentage: 75 },
  { name: 'Michael', percentage: 90 },
];

const modifiedPupils = pupils.map((pupil) => ({
  ...pupil,
  newProperty: 'value',
}));

console.log(modifiedPupils);
