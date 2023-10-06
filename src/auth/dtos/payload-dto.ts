export class PayloadDto {
  readonly id: string;
  readonly name: string;
  readonly profile: number;

  constructor(id: string, name: string, profile: number) {
    this.id = id;
    this.name = name;
    this.profile = profile;
  }
}
