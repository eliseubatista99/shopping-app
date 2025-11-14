import type { AddressDto } from "@api";

export class AddressHelper {
  static equals = (a1: AddressDto | undefined, a2: AddressDto | undefined) => {
    if (!a1) {
      return !a2;
    }

    if (!a2) {
      return !a1;
    }

    return (
      a1.name === a2.name &&
      a1.city === a2.city &&
      a1.country === a2.country &&
      a1.countryCode === a2.countryCode &&
      a1.postalCode === a2.postalCode &&
      a1.street === a2.street
    );
  };

  static formatAddressShort = (a: AddressDto | undefined) => {
    if (!a) {
      return "";
    }

    return `${a.street} ${a.city} ${a.postalCode}`;
  };
}
