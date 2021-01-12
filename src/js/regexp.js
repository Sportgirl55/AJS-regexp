
export default class Validator {
  constructor(name) {
    this.name = name;
  }

  // eslint-disable-next-line consistent-return
  validateUsername() {
    if ((/^[a-z][-_]*/gmi).test(this.name) && (/[a-z]$/).test(this.name) && ((/\d{4,}/mig).test(this.name) === false)) {
      return true;
    }
  }
}
