const App = () => {
  const name = "Edma";
  const surname = "Edmus";
  const age = 24;
  const weight = 110;
  const isAdult: boolean = true;
  const wife = null;
  const favoriteColor = undefined;
  const numbers: number[] = [1, 2, 3, 4];

  const items: (number | string)[] = [1, 2, "3", "4"];
  const item: number | string = "1";

  const dog = {
    name: "jodasSo",
    age: 5,
  };

  const number1 = 1;
  const number2 = Number("2");

  const result: number = number1 + number2;
  console.log(result, typeof result);

  const addNumber = (num1: number, num2: number) => {
    return num1 + num2;
  };

  const car: {
    make: string;
    color: string;
  } = {
    make: "Volvo",
    color: "",
  };
  const response = true;
  if (response) {
    car.color = "red";
  }

  const car1: {
    make: string;
    model?: string;
  } = {
    make: "BMW",
  };
  if (response) {
    car1.model = "X5";
  }

  interface Person {
    name: string; // required
    age: number; // required
    email?: string; // optional
  }
  const person: Person = {
    name: "edma",
    age: 31,
  };
  const person1: Person = {
    name: "edma",
    age: 30,
    email: "edma@edma.lt",
  };

  console.log(
    name,
    surname,
    age,
    weight,
    isAdult,
    wife,
    favoriteColor,
    numbers,
    items,
    item,
    dog,
    number1,
    number2,
    result,
    addNumber,
    car,
    car1,
    person,
    person1
  );

  return <div>App</div>;
};

export default App;
