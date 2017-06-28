console.log('training');
const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording',
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData.filter(elem => elem.name.length >= 10 && elem.name.length <= 25);

console.log(results);

## Combining .map() And .filter() Together
What makes .map() and .filter() so powerful is that they can be combined. Because both methods return arrays, we can chain the method calls together so that the returned data from one can be a new array for the next.

const names = ['Michael', 'Ryan', 'Tyler'];

const shortNamesLengths = names.filter( name => name.length < 5 ).map( name => name.length );
To break it down, the names array is filtered, which returns a new array, but then .map() is called on that new array, and returns a new array of its own! This new array that's returned from .map() is what's stored in shortNamesLengths.

## .filter() First!
On a side note, you will want to run things in this order (.filter() first and then .map()). Because .map() runs the function once foreach item in the array, it will be faster if the array were already filtered.

## .filter() and .map() Quiz
Using the same music data, use .filter() and .map() to filter and map over the list and store the result in a variable named popular. Use .filter() to filter the list down to just the albums that have sold over 1,000,000 copies. Then chain .map() onto the returned array to create a new array that contains items in the format:

<artist> is a great performer
The first item in the popular array will be 'Adele is a great performer'.
