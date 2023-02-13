fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
// fetch('https://api.covidtracking.com/v1/us/daily.json')
  .then(response => response.json())
  .then(datas => {
    // const [data1, data2, data3] = datas;
    // console.log(datas.find(countries => countries.country === 'Nigeria'));
    const getIn = datas.find(countries => countries.country === 'Nigeria')
    console.log(getIn)
    const { infected, recovered, deceased } = getIn;
    let add = infected + recovered + deceased;
    const numRecoveredPeople = recovered;
    const numDeceasedPeople = deceased
    
    const totalCases = document.getElementById('total');
    const recoveredCases = document.getElementById('recovered');
    recoveredCases.innerHTML = `${numRecoveredPeople}`;
    const deathCases = document.getElementById('deaths');
    deathCases.innerHTML = `${numDeceasedPeople}`;
    totalCases.innerHTML = `${add}`;




    const elem = document.querySelector(".counter");

// Update the value attribute
elem.setAttribute("value", add);

    // let add = infected + recovered + deceased;
    console.log(add);

    
  })
	.catch(err => console.error(err));