function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    function restricted(array,deleted){
      for(let i = 0 ; i < array.length ; i++){
        if(array[i] == deleted){
           array[i] = false
        }
      }
      return array
    }
  
    for(let i = 0 ; i< geese.length ; i ++){
     restricted(birds,geese[i])
      }
    return birds.filter(x => x != false)
    };


    /*


    8kyu Filter out the geese

    Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. 
Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

BEST SOLUTİONS

-------------------------------------------------------------------------------------


function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(b => !geese.includes(b));
};

-------------------------------------------------------------------------------------


function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};
-------------------------------------------------------------------------------------

const GEESE = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const gooseFilter = birds => birds.filter(bird => !GEESE.includes(bird));


-------------------------------------------------------------------------------------

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => !geese.includes(bird));
  
};
-------------------------------------------------------------------------------------

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

const notGoose = bird =>
  !geese.includes(bird)

const gooseFilter = birds =>
  birds.filter(notGoose)