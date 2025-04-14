const users = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      contact: {
        email: "alice@example.com",
        phone: "123-456-7890",
        address: {
          street: "123 Maple St",
          city: "Wonderland",
          zipCode: "12345"
        }
      },
      friends: [
        { name: "Bob", age: 27, id: 2 },
        { name: "Charlie", age: 22, id: 3 }
      ],
      activities: [
        { name: "Running", frequency: "3 times a week" },
        { name: "Reading", frequency: "Every day" }
      ]
    },
    {
      id: 2,
      name: "Bob",
      age: 27,
      contact: {
        email: "bob@example.com",
        phone: "234-567-8901",
        address: {
          street: "456 Oak St",
          city: "Fantasyland",
          zipCode: "67890"
        }
      },
      friends: [
        { name: "Alice", age: 25, id: 1 },
        { name: "Diana", age: 30, id: 4 }
      ],
      activities: [
        { name: "Swimming", frequency: "Every weekend" },
        { name: "Cycling", frequency: "2 times a week" }
      ]
    },
    {
      id: 3,
      name: "Charlie",
      age: 22,
      contact: {
        email: "charlie@example.com",
        phone: "345-678-9012",
        address: {
          street: "789 Pine St",
          city: "Dreamland",
          zipCode: "11223"
        }
      },
      friends: [
        { name: "Alice", age: 25, id: 1 }
      ],
      activities: [
        { name: "Yoga", frequency: "Every day" },
        { name: "Photography", frequency: "Once a week" }
      ]
    },
    {
      id: 4,
      name: "Diana",
      age: 30,
      contact: {
        email: "diana@example.com",
        phone: "456-789-0123",
        address: {
          street: "101 Birch St",
          city: "Eden",
          zipCode: "33445"
        }
      },
      friends: [
        { name: "Bob", age: 27, id: 2 }
      ],
      activities: [
        { name: "Hiking", frequency: "Every month" },
        { name: "Cooking", frequency: "Every weekend" }
      ]
    }
  ];
  

  const [,,,data] = users;
  console.log(data);
  const {activities} = data;
//   console.log(activities[0].name);
//   console.log(activities[0].frequency);
console.log(activities);
const result = activities.map((val)=> {return val.name});
console.log(result);


//to access contact;

const {contact} = data;
console.log(contact.email);
console.log(contact.address.city);

  