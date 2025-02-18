import powers from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public age: number,
    public powerId: number
  ) {}

  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.desc || "not found"
    );
  }
}

export const name = "Hero";
export const PI = 3.1416;
