export class ApiHelper {
  private static TOKEN: string = "";

  static setToken = (value: string) => {
    this.TOKEN = value;
  };

  static getToken = () => {
    return this.TOKEN;
  };

  static buildHeaders = (headers?: HeadersInit): HeadersInit => {
    return {
      "Content-Type": "application/json",
      authorization: `Bearer ${this.TOKEN}`,
      ...headers,
    };
  };
}
