
function linearSearch(arr, elToFind) {
    for (var i=0; i<arr.length; i++) {
      if (arr[i] == elToFind) {
        return i;
      }
    } return null;
  }
  const array = [1, 2, 3, 4, 5, 6]
  console.log(linearSearch(array, "3")); // returns 2

  