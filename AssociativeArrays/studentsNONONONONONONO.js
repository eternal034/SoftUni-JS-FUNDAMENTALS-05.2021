function students(strArr) {
    let data = {};

    for (let line of strArr) {
        if (line.includes(':')) {
            let [courseName, capacity] = line.split(': ');
            capacity = Number(capacity);

            if (!Object.keys(data).includes(courseName)) {
                data[courseName] = { capacity, students: [] };
            } else {
                data[courseName].capacity += capacity;
            }
        } else if (line.includes('with email')) {
            let [userInfo, wordWith, wordEmail, email, wordJoins, course] = line.split(' ');
            let [user, userCredits] = user.split('[');
            userCredits = userCredits.replace(']', '');

            if (Object.keys(data).includes(course)) {
                if (data[course].capacity > 0) {
                    data[course].students.push({ user, userCredits, email, courseName: course });
                    data[course].capacity -= 1;
                }
            }
        }
    }
}

students();