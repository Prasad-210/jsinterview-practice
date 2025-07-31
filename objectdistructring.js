const cartoonData = {
    id: 1,
    title: "Tom And Jerry",
    createdIn: "1940",
    createdBy: "William Hanna and Joseph Barbera",
    isAired: true,
    famousCharacters: [
      "Tom-Cat",
      "Jerry-Mouse",
      "Spike",
      "Tyke",
      "Toodles Galore",
      "Quacker",
      "Jeannie",
      "Mammy Two Shoes",
    ],
    books: {
      English: {
        book1: "There's a Mouse Hiding in This Book",
        book2: "This Book Is Not a Piece of Cheese!",
      },
      Hindi: "Available in hindi",
      French: "",
    },
  
    channel: "cartoon network",
    NoOfEpisode: 2736, // random number
    reviews: {
      tv_review: {
        rating: 8.2,
        NoOfRatings: 564345, // random number
        NoOfFeedback: 0, // random number
      },
      IMDb: {
        rating: 8.4,
        NoOfRatings: 657678, // random number
        NoOfFeedback: 35465, // random number
      },
    },
  };

  //Normal Way
//   const createdIn = cartoonData.createdIn;
//   console.log(createdIn)

//   const createdBy = cartoonData.createdBy;
//   console.log(createdBy)


//object Destructuring
// const {createdBy, createdIn, title} = cartoonData;
// console.log(createdBy, createdIn, title);


//whay object Destructuring
//to deal with real world API


//extracting arrays from objects
//console.log(cartoonData.famousCharacters);


//Assigning another name(like nick names)

// const {createdBy:createOwner, createdIn:createdYrs, title:heading, famousCharacters:characters} = cartoonData;
// console.log(createOwner, createdYrs, characters, heading);



//setting default values (No undefined to users) for the data which is not present inside the object
// console.log(episoddesEnddate);

const {episoddesEnddate = "1958-09-04"} = cartoonData;
console.log(episoddesEnddate);

  