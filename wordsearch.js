const wordSearch = (letters, word) => {
    
  //Search the word horizontally. Pre-Define.
  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log("JOIN - THE NEW ARRAY => ", horizontalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  //Script that will perform searching the word vertically.
    
  let vertical = {};
    
  // First array iteration.Return are the element of arrays ([..], [..], [..])
  for (let array of letters) {
    // Second array iteration.Return are the index/element of the array (..)
    for (let [index, element] of Object.entries(array)) {
      // Initialize the value property of our Object as an empty array if the key is falsy (not yet exist).
      // Our array index serve as the key properties of our object
      vertical[index] ||= [];
      // Pushing the element to our key (Array index as our key). A new array.
      vertical[index].push(element);
    }
  }

  //Obtain the value properties of our vertical object.
  let verticalValues = Object.values(vertical);
    
  // Map and join the element to create a word. Map returns a new array.
  const verticalJoin = verticalValues.map(verticalVal => verticalVal.join(''));

  //Iterate the element inside our verticalJoin array.
  for (let element of verticalJoin) {
    if (element.includes(word)) return true;
  }
    
  return false;
};

module.exports = wordSearch;