import { faker } from "@faker-js/faker";
import { Mappable } from "./Maps";
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";
  constructor() {
    (this.name = faker.name.firstName()),
      (this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: parseFloat(faker.address.longitude()),
      });
  }
  contentString(): string {
    return `<h3>USER: ${this.name}</h3>`;
  }
}
