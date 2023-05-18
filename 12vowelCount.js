// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function vowels(str) {
    var vowel_list = 'aeiou';
    var vcount = 0;
    // console.log("unknown thing is ", vowel_list.indexOf(str[2]))
    for(var x = 0; x < str.length ; x++)
    {
      if (vowel_list.indexOf(str[x]) !== -1)
      {
        vcount += 1;
      }
    
    }
    return vcount;
  }
  console.log(vowels("i love bananas"))