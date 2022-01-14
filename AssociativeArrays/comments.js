function comments(strgArr) {
  let users = [];
  let articles = [];
  let commentsByArticle = {};

  let splitted;
  let newUser;
  let article;

  for (let line of strgArr) {
    if (line.includes("user")) {
      splitted = line.split(" ");
      newUser = splitted.pop();
      users.push(newUser);
    } else if (line.includes("article")) {
      splitted = line.split(" ");
      article = splitted.pop();
      articles.push(article);
    } else {
      let [info, comment] = line.split(": ");
      let [user, article] = info.split(" posts on ");
      let [commentTitle, commentContent] = comment.split(", ");
      let hasRegistration = users.includes(user);
      let articleExist = articles.includes(article);

      if (hasRegistration && articleExist) {
        if (!Object.keys(commentsByArticle).includes(article)) {
          commentsByArticle[article] = [];
        }

        commentsByArticle[article].push({
          user,
          commentTitle,
          commentContent,
        });
      }
    }
  }

  let sortedComments = Object.keys(commentsByArticle).sort(
    (a, b) => commentsByArticle[b].length - commentsByArticle[a].length
  );

  for (let article of sortedComments) {
    console.log(`Comments on ${article}`);
    let comments = commentsByArticle[article];
    comments.sort((a, b) => a.user.localeCompare(b.user));
    for (let comment of comments) {
      console.log(
        `--- From user ${comment.user}: ${comment.commentTitle} - ${comment.commentContent}`
      );
    }
  }
}

comments([
  "user aUser123",
  "someUser posts on someArticle: NoTitle, stupidComment",
  "article Books",
  "article Movies",
  "article Shopping",
  "user someUser",
  "user uSeR4",
  "user lastUser",
  "uSeR4 posts on Books: I like books, I do really like them",
  "uSeR4 posts on Movies: I also like movies, I really do",
  "someUser posts on Shopping: title, I go shopping every day",
  "someUser posts on Movies: Like, I also like movies very much",
]);
