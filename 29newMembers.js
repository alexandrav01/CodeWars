// The Western Suburbs Croquet Club has two categories of membership, Senior and Open.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club,
// handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs, one per member.
// Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the
// respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//push data array in neMember array
//if statement to check each small array has only 2 elements
//add age variable newMember[0][0]
//add handicap variable newMember[0][1]
// -2 < handicap < 26
// if age>=55 && handicap >7 - Senior else Open

function openOrSenior(data) {
  let newMembers = [];
  let age = 0;
  let handicap = 0;
  let members =[]

  for (let i = 0; i < data.length; i++) {
    newMembers.push(data[i]);
  }
  console.log("New members list is ", newMembers)
  // console.log("Check first member age ", newMembers[0][0])

  for (let j = 0; j < newMembers.length; j++) {
    age = newMembers[j][0];
    // console.log("Age is ", age)
    handicap = newMembers[j][1];
    // console.log("Handicap is ", newMembers[j][1])

    // if (handicap<=7) {
    //     members.push("Open")  
    //     console.log("please send help here: ", age, handicap)
    // } else if (age >= 55 && handicap > 7) {
    //     console.log("this is senior: ", age, handicap)
    //     members.push( "Senior");
    //   }
    if (age >= 55 && handicap > 7) {
            console.log("this is senior: ", age, handicap)
            members.push( "Senior");
    } else members.push("Open")

  }
  return members
}
console.log(openOrSenior([[3, 12],[55,3],[91, 0],[56, 26]]));
