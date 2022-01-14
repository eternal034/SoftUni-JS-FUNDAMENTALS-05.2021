function matchFullName(array) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = [];
    let match = pattern.exec(array);

    while (match != null) {
        result.push(match[0]);

        match = pattern.exec(array)
    }

    console.log(result.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)