const App = () => {
  const name: string = "Edmund";
  const surname = "Jackovskij";
  const age: number = 31;
  const isAdult: boolean = true;
  const wife: null = null;
  const favoriteColor: undefined = undefined;

  const numbers: number[] = [1, 2, 3, 4, 5]; // naudosim sita

  const items: (number | string)[] = [1, 2, "3", "4"];
  const item: number | string = "1";

  // const dog: any = {
  //   name: "brisius",
  //   age: 1,
  // }; // geriau nenaudoti, bet yra galimybe, paleisti taip, type any, siek tiek neigia typescripto prasme

  // const numbers1: Array<number> = [1, 2, 3, 4, 5];
  // const numbers1: Array<number | string> = [1, 2, 3, 4, 5];

  const addNumber = (num1: number, num2: number) => {
    return num1 + num2;
  };

  const addedNumber = addNumber(1, 5);

  // OBJEKTAI

  const car: {
    make: string;
    color: string;
  } = {
    make: "Audi",
    color: "",
  };

  const response = true;

  if (response) {
    car.color = "Black";
  }

  const car1: {
    make: string;
    model?: string;
  } = {
    make: "Audi",
  };

  if (response) {
    car1.model = "A8";
  }

  type PPerson = {
    name: string;
    age: number;
    email?: string;
  };

  // type atlieka ta pacia funkcija kaip ir interface

  interface Person {
    name: string; // required laukas
    age: number; // required laukas
    email?: string; //optional laukas (?)
  }

  interface SuperHero {
    power: string;
  }

  interface SuperPerson extends SuperHero {
    name: string;
  }

  const person: Person = {
    name: "Edma",
    age: 31,
  };

  const person1: PPerson = {
    name: "Edmund",
    age: 31,
    email: "edma@gmail.com",
  };

  const hero: SuperPerson = {
    power: "flying",
    name: "Petras",
  };

  console.log(person, person1, hero);

  //_____________________________________

  console.log(
    name,
    surname,
    age,
    isAdult,
    wife,
    favoriteColor,
    numbers,
    items,
    item,
    addedNumber
  );

  const title: string = "Vermontas";
  const subTitle: string = "Kavinė - Baras";
  const peopleCount: number = 5;
  const maxPeopleCount: number = 26;
  const isOpen: boolean = true;
  const openTime: string = "12:00";
  const closeTime: string = "02:00";
  const security: null = null;

  console.log(
    title,
    subTitle,
    peopleCount,
    maxPeopleCount,
    isOpen,
    openTime,
    closeTime,
    security
  );

  // 1 uzduotis

  const returnString = (name?: string) => {
    if (name) {
      return `One for ${name}, one for me`;
    } else {
      return "One for you, one for me";
    }
  };

  // 2 uzduotis

  const ageInDifferentPlanets = (ageInSeconds: number) => {
    const earthYears: number = ageInSeconds / 31557600;
    const mercury: number = earthYears * 0.2408467;
    const venus: number = earthYears * 0.61519726;
    const earthDays: number = earthYears * 365.25;
    const mars: number = earthYears * 1.8808158;
    const jupiter: number = earthYears * 11.862615;
    const saturn: number = earthYears * 29.447498;
    const uranus: number = earthYears * 84.016846;
    const neptune: number = earthYears * 164.79132;

    return (
      <div>
        <p>Your age in seconds: {ageInSeconds}</p>
        <p>Your age in Earth is: {earthYears}</p>
        <p>Your age in Mercury: {mercury}</p>
        <p>Your age in Venus: {venus}</p>
        <p>Your age in Earth's days: {earthDays}</p>
        <p>Your age in Mars: {mars}</p>
        <p>Your age in Jupiter: {jupiter}</p>
        <p>Your age in Saturn: {saturn}</p>
        <p>Your age in Uranus: {uranus}</p>
        <p>Your age in Neptune: {neptune}</p>
      </div>
    );
  };

  // 3 uzduotis

  const covertToAcronym = (longName: string) => {
    const toWords = longName.split(" ");
    const accronymLetters = toWords.map((word) => word.charAt(0).toUpperCase());
    const accronym: string = accronymLetters.join("");
    return (
      <div>
        <p>Your long name: {longName}</p>
        <p>Your accronym: {accronym}</p>
      </div>
    );
  };

  // 4 uzduotis

  type User = {
    name: string;
    age: number;
    occupation: string;
  };

  const users: User[] = [
    {
      name: "Max Mustermann",
      age: 25,
      occupation: "Chimney sweep",
    },
    {
      name: "Kate Müller",
      age: 23,
      occupation: "Astronaut",
    },
  ];

  const logPerson = (users: User[]) => {
    return (
      <div>
        {users.map((user) => (
          <p key={user.name}>
            - {user.name}, {user.age}
          </p>
        ))}
      </div>
    );
  };

  const logPersonConsoleLog = (user: User) => {
    console.log(` - ${user.name}, ${user.age}`);
  };

  console.log("Users:");
  users.forEach(logPersonConsoleLog);

  // 5 uzduotis

  return (
    <div>
      <h1>Task 1</h1>
      <p>Empty: {returnString()}</p>
      <p>With Name: {returnString("Tomas")}</p>
      <h1>Task 2</h1>
      <div>{ageInDifferentPlanets(1000000000)}</div>
      <h1>Task 3</h1>
      <div>{covertToAcronym("Baisiai Mandras Volkswagenas")}</div>
      <h1>Task 4</h1>
      <div>{logPerson(users)}</div>
    </div>
  );
};

export default App;
