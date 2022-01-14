function companyUsers(array){
    let companies = {};

    array.forEach(line => {
        let [company, user] = line.split(' -> ');
        if (!companies.hasOwnProperty(company)) companies[company] = [];
        if (!companies[company].includes(user)) companies[company].push(user);
    })
    
    let sortedCompanies = Object.entries(companies).sort((a,b) => a[0].localeCompare(b[0]));
    for(let el of sortedCompanies){
        console.log(el[0]);
        let uniqUsers = new Set(el[1]);
        for(let user of uniqUsers){
            console.log(`-- ${user}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])