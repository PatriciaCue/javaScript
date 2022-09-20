/**
 * COMMON TYPE CONVERSIONS
 * LOOPS
 */

//convert to string
foo.toString();

//convert string to integer
Number.parseInt('55'); //55 as a number

//convert string to number
Number.parseFloat('55.99'); //55.99 as a number

// BREAK AND CONTINUE

for (let index = 0; index < 5; index++)
{
    console.log(i);
    if (i ===3)
        break;
}
//Console Output:
// 0 1 2 3

for (let index = 0; index < 5; index++)
{
    if (i ===3)
        continue;
    console.log(i);
}
//Console Output:
// 0 1 2 4