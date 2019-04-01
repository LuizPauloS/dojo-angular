export class Hero {

  id: number;
  name: string;
  power: string;
  dateRegister: Date;

  constructor(id: number, name: string, power: string, dateRegister: Date) {
    this.id = id;
    this.name = name;
    this.power = power;
    this.dateRegister = dateRegister;
  }

}
