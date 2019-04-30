# basic-JS-challenges-fcc
## 1.  Basic JavaScript: Counting Cards
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.


| Count Change        | Cards          
| ------------- |:-------------:        |
| -1            | 2, 3, 4, 5, 6         |
|  0            | 7, 8, 9               |  
| -1            | 10, 'J', 'Q', 'K', 'A'|

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
*Do NOT* reset count to 0 when value is 7, 8, or 9.
*Do NOT* return an array.
*Do NOT* include quotes (single or double) in the output.
[Solution](https://github.com/mesfint/basic-JS-challenges-fcc)

___

## 2.  Basic JavaScript: Golf Code
In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):


| Strokes        | Return          
| -------------  |:-------------:        |
| 1           	 | "Hole-in-one!"        |
|  <= par - 2    | "Eagle"               |  
| par	         | "Par"		 |
| par + 1	 | "Bogey"               |  
| par + 2        | "Double Bogey"	 |
|>= par + 3      | "Go Home!"		 |

par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.
[Solution](https://github.com/mesfint/basic-JS-challenges-fcc)
___

## 3.  Basic JavaScript: Shopping List
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
```javascript
["Chocolate Bar", 15]
```
There should be at least 5 sub-arrays in the list.
[Solution](https://github.com/mesfint/basic-JS-challenges-fcc)
___

## 4.  Basic JavaScript: Standin Line
In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.
[Solution](https://github.com/mesfint/basic-JS-challenges-fcc)
___
## 5.  Basic JavaScript: Word Blanks
We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs, adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

Consider this sentence - "It was really ____, and we ____ ourselves ____". This sentence has three missing pieces- an adjective, a verb and an adverb, and we can add words of our choice to complete it. We can then assign the completed sentence to a variable as follows:
```javascript
var sentence = "It was really" + "hot" + ", and we" + "laughed" + "ourselves" + "silly.";
```
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the result variable.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.
[Solution](https://github.com/mesfint/basic-JS-challenges-fcc)
___
## 6.  Basic JavaScript: Record Collection
You are given a ### JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.

 * Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), and a value (like "Addicted to Love") to modify the data in this collection.

* If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.

* Your function must always return the entire collection object.

There are several rules for handling incomplete data:

* If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.

* If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.

* If value is empty (""), delete the given prop property from the album.

### Hints
Use bracket notation when accessing object properties with variables.

Push is an array method you can read about on Mozilla Developer Network.

You may refer back to Manipulating Complex Objects Introducing JavaScript Object Notation (JSON) for a refresher.
```javascript
var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));
```
[Solution](https://github.com/mesfint/basic-JS-challenges-fcc)
