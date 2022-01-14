function furniture(array) {
    let totalMoneySpend = 0;
    let pattern = />>(?<city>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/g;

    let match = pattern.exec(array)

    console.log(`Bought furniture:`);

    while (match != null) {
        let [_, type, price, qty] = match;
        price = Number(price);
        qty = Number(qty);
        totalMoneySpend += price * qty;
        console.log(`${type}`);

        match = pattern.exec(array);
    }

    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
}

furniture([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"]
);