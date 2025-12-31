export class AppHelper {
  private static _token: string | null | undefined = "";

  static setToken = (t: string | null | undefined) => {
    this._token = t;
  };

  static getToken = () => {
    return this._token;
  };
}
