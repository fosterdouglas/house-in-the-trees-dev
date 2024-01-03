var ghpages = require("gh-pages");

ghpages.publish(
  ".output/public",
  {
    // Set the specific repo since it's not using this current repo
    repo: "https://github.com/fosterdouglas/house-in-the-trees.git",
    // Make sure hidden files get pushed, like .nojekyll
    dotfiles: true,
  },
  function (err) {
    console.log(err);
  }
);
