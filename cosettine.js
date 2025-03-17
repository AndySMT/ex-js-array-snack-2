const cars = [
  {
    model: "Civic",
    year: 2019,
    hp: 158,
    cc: 2000,
    manufacturer: "Honda",
    color: "Red",
    price: "20000€",
    available: true,
  },
  {
    model: "Corolla",
    year: 2020,
    hp: 139,
    cc: 1800,
    manufacturer: "Toyota",
    color: "Blue",
    price: "19000€",
    available: true,
  },
  {
    model: "Model S",
    year: 2021,
    hp: 670,
    cc: 0, // Auto elettrica: cc non rilevante
    manufacturer: "Tesla",
    color: "Black",
    price: "85000€",
    available: false,
  },
  {
    model: "Mustang",
    year: 2018,
    hp: 450,
    cc: 5000,
    manufacturer: "Ford",
    color: "Yellow",
    price: "35000€",
    available: true,
  },
  {
    model: "A4",
    year: 2022,
    hp: 188,
    cc: 2000,
    manufacturer: "Audi",
    color: "White",
    price: "40000€",
    available: false,
  },
];

const avaibleCar = cars.filter((e) => e.available);
console.log(avaibleCar);

const carModel = cars.map((car) => car.model);
console.log(carModel);

const totalHp = cars.reduce((acc, car) => car.hp + acc, 0);
console.log(totalHp);

const orderedCars = cars.sort((a, b) => a.year - b.year);
console.log("ordine per year", orderedCars);

const sconto = cars.map((car) => {
  prezzoScontato = (parseFloat(car.price) * 0.9).toFixed(2);
  return { ...car, prezzoScontato };
});
console.log("auto con presso scontato", sconto);

function applyDiscount(carsArray, discountPercent) {
  return carsArray.map((car) => {
    const numericPrice = parseFloat(car.price);
    const discountedPrice = (
      numericPrice *
      (1 - discountPercent / 100)
    ).toFixed(2);
    return { ...car, price: `${discountedPrice}€` };
  });
}

const discountedCars = applyDiscount(cars, 10);
console.log("Auto con sconto del 10%:", discountedCars);

const somma = cars.reduce((acc, car) => car.cc + acc, 0);
const averageCC = somma / cars.length;
console.log(averageCC);

//*######################################################################

async function getUser(id) {
  try {
    return await fetch(`https://dummyjson.com/users/${id}`).then((res) => {
      if (!res.ok) throw new Error("errore nel fetch");
      return res.json();
    });
  } catch {
    error(console.error(error));
  }
}

/* getUser(1).then((data) => console.log(data));
 */

(async () => {
  const data = await getUser(1);
  console.log(data);
  console.log("ciao gigi");
})();
