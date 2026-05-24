function CountryService() {
  this.getCountry = async function (code) {
    console.log('data from api');

    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

    const data = await res.json();

    return data[0].name.common;
  };
}

function CountryProxy() {
  this.CountryService = new CountryService();
  this.cache = {};

  this.getCountry = async function (code) {
    const upperCode = code.toUpperCase();

    if (!this.cache[upperCode]) {
      console.log('not found in cache');
      this.cache[upperCode] = await this.CountryService.getCountry(upperCode);
    } else {
      console.log('found in cache');
    }

    return this.cache[upperCode];
  }
}

// client code
const proxy = new CountryProxy();

(async () => {
  console.log(await proxy.getCountry('eg'));
  console.log(await proxy.getCountry('eg'));

  console.log(await proxy.getCountry('fr'));
})();