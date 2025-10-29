const cars = [
    { id: 1, licensePlate: 'х123ам', model: 'Lada' },
    { id: 2, licensePlate: 'о456ур', model: 'BMW' },
    { id: 3, licensePlate: 'с789вн', model: 'Toyota' },
    { id: 4, licensePlate: 'а001аа', model: 'Mercedes' }
];

function findCarByPlate(carlist, plateToFind) {
    const a = carlist.find(element => element.licensePlate === plateToFind);
    return a;
};

console.log(findCarByPlate(cars,'а001аа'))

console.log(findCarByPlate(cars,'о888ур'))