function bookShelf(strArray) {
    let shelfs = {};

    for (let line of strArray) {
        if (line.includes('->')) {
            let [shelfId, genre] = line.split(' -> ');

            if (!Object.keys(shelfs).includes(shelfId)) {
                shelfs[shelfId] = { [genre]: [] };
            }
        } else {
            let [bookInfo, bookGenre] = line.split(', ');

            for (let shelf in shelfs) {
                if (Object.keys(shelfs[shelf]).includes(bookGenre)) {
                    shelfs[shelf][bookGenre].push(bookInfo);
                }
            }
        }
    }

    let sortedShelfs = Object.keys(shelfs).sort((a, b) =>
        Object.entries(shelfs[b])[0][1].length - Object.entries(shelfs[a])[0][1].length);

    for (let shelfId of sortedShelfs) {
        console.log(`${shelfId} ${Object.keys(shelfs[shelfId])}: ${Object.values(shelfs[shelfId])[0].length}`);

        Object.values(shelfs[shelfId]).forEach(values => {
            values.sort((a, b) => a.localeCompare(b)).forEach(bookInfo => {
                console.log(`--> ${bookInfo}`);
            });
        });
    }
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])