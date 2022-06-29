// #1
async function numberFact(number) {
    let res = await axios.get(`http://numbersapi.com/${number}`)
    console.log(res.data)
}

// #2
async function getNumberFacts(number) {
    for (let i = number; i < number + 3; i++) {
        let res = await axios.get(`http://numbersapi.com/${i}`)
        console.log(res.data)
    }
}

// #3
async function get4Facts(num) {
    let url = `http://numbersapi.com/${num}`
    let response = await Promise.all([
        axios.get(`${url}`),
        axios.get(`${url}`),
        axios.get(`${url}`),
        axios.get(`${url}`)
    ]);
    for (fact of response) {
        console.log(fact.data)
    }
}