# _Mr. Roboger's Neighborhood_

#### _A web app that returns a range of numbers and substitues specific ones with words. 10/31/2020_

#### By _**Constantine Yakubovski**_

## Description 

A web app that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

- Numbers that contain a 1: all digits are replaced with _"Beep!"_

- Numbers that contain a 2: all digits are replaced with _"Boop!"_

- Numbers that contain a 3: all digits are replaced with _"Won't you be my neighbor?"_

### Describe: beepBoop():

**Test**: "It should return an array of numbers starting with 0 up until inputted number"

**Code**: 

`let array = [];`
`let inputNumber = number`
`for (let  i = 0; i <= number; i++) {`
`array.push(i); }`

 **Expect**: (beepBoop(3).toEqual([0,1,2,3]);”
___
**Test**: "It should return an array with a 0 if the number 0 is inputted"

 **Expect**: (beepBoop(0).toEqual([0]);”
___
**Test**:  "It should return _"Beep!"_ instead of all numbers that contain 1"

 **Expect**: (beepBoop(1).toEqual(["Beep!"]);
___
**Test**: "It should return _"Boop!"_ instead of all numbers that contain 2"

**Expect**: (beepBoop(2).toEqual(["Boop!"]);
___
 **Test**: "It should return _"Won't you be my neighbor?"_ instead of all numbers that contain 3"

**Expect**: (beepBoop(3).toEqual(["Won't you be my neighbor?"]);
___
 **Test**: "  "It should return "Won't you be my neighbor?" along with the input name.

**Expect**: (beepBoop(3).toEqual([0, "Beep!, "Boop!", "Won't you be my neighbor, [name]?"]);

## Setup/Installation Requirements

-  _Open Terminal_
-  `$ git clone` [this repo](https://github.com/faustlarsen/Mr.Roboger)

-  `$ cd mr.roboger`

-  `$ open index.html`

## Known Bugs

No known bugs.  

## Support and contact details

__faustlarsen@gmail.com__

## Technologies Used

-  _HTML_

-  _CSS_

-  _JavaScript_

-  _JQuery_

-  _Bootstrap_

-  _Written in VS Code_

### License 

This software is licensed under the MIT license


Copyright (c) 2020 **_Constantine Yakubovski_**