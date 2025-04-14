const cartoonData = 
[{
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
    // cartoonSeries: function(data1,data2,data3){
    //     console.log(`${data1} - ${data2} - ${data3}`);
        

    // },
    cartoonSeries: function(data1,...allData){

        console.log(data1); 
        const result = allData.join("/")
        console.log(`${result}`);
    
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
  },]
//... rest syntax

//   const arr = [1,2,34,5,6,67];

//   const [a,b,c,d,e,f] = arr;
//   console.log(a,b,c,d,e,f, y);
//   console.log([a,b,c,d,e,f, y]);

  //rest on the above array will work like:

//   const [a,b,...restVariable]= arr;

//   console.log(a,restVariable);

//Practicle example

// const [data] = cartoonData;
// // console.log(data);

// const {famousCharacters} = data;
// console.log(famousCharacters);

// const [firstChar, secondChar, ...otherChar] = famousCharacters;
// console.log(firstChar,secondChar,otherChar);


//functions rest operator

// function sum(...data){
//     let total = 0;

//     for( let num of data){
//         total += num;
//     }
//     return total
// }


// console.log( sum(2,4,56,4));
// console.log( sum(1,4));
// console.log( sum(24,43,56,4));



  //====

  const [data] = cartoonData;

  data.cartoonSeries("Capgi", "Deloitte", "TCS")
  data.cartoonSeries("Capgi", "Deloitte", "TCS", "TechMahindra","seymens","google")
