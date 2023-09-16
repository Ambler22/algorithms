function pyramid(height) {
  if (height == 0) {
    return "";
  }

  var stars = pyramid(height - 1);
  
  for (let i = 0; i < height; i++) {
    stars += "*";
  }
  stars += "\n";

  return stars;
}

// *
// **

// ***
// ****

console.log(pyramid(4));

// pyramid(0) ""
// pyramid(1) "*\n"
// pyramid(2) "*\n**\n"
// pyramid(3) "*\n**\n***\n"
// pyramid(4)  "*\n**\n***\n****\n"
