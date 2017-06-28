# Imperative Code
A lot of JavaScript is imperative code. If you don't know what "imperative" means here, then you might be scratching your head a bit. According to the dictionary, "imperative" means:

expressing a command; commanding
When JavaScript code is written imperatively, we tell JavaScript exactly what to do and how to do it. Think of it as if we're giving JavaScript commands on exactly what steps it should take. For example, I give you the humble for loop:

const people = ['Amanda', 'Geoff', 'Michael', 'Richard', 'Ryan', 'Tyler']
const excitedPeople = []

for (let i = 0; i < people.length; i++) {
  excitedPeople[i] = people[i] + '!'
}
If you've worked with JavaScript any length of time, then this should be pretty straightforward. We're looping through each item in the people array, adding an exclamation mark to their name, and storing the new string in the excitedPeople array. Pretty simple, right?

This is imperative code, though. We're commanding JavaScript what to do at every single step. We have to give it commands to:

set an initial value for the iterator - (let i = 0)
tell the for loop when it needs to stop - (i < people.length)
get the person at the current position and add an exclamation mark - (people[i] + '!')
store the data in the ith position in the other array - (excitedPeople[i])
increment the i variable by one - (i++)
Remember the example of keeping the air temperature at 71º? In my old car, I would turn the knob to get the cold air flowing. But if it got too cold, then I'd turn the knob up higher. Eventually, it would get too warm, and I'd have to turn the knob down a bit, again. I'd have to manage the temperature myself with every little change. Doesn't this sound like an imperative situation to you? I have to manually do multiple steps. It's not ideal, so let's improve things!

## Declarative Code
In contrast to imperative code, we've got declarative code. With declarative code, we don't code up all of the steps to get us to the end result. Instead, we declare what we want done, and JavaScript will take care of doing it. This explanation is a bit abstract, so let's look at an example. Let's take the imperative for loop code we were just looking at and refactor it to be more declarative.

With the imperative code we were performing all of the steps to get to the end result. What is the end result that we actually want, though? Well, our starting point was just an array of names:

const people = ['Amanda', 'Geoff', 'Michael', 'Richard', 'Ryan', 'Tyler']
The end goal that we want is an array of the same names but where each name ends with an exclamation mark:

["Amanda!", "Geoff!", "Michael!", "Richard!", "Ryan!", "Tyler!"]
To get us from the starting point to the end, we'll just use JavaScript's .map() function to declare what we want done.

const excitedPeople = people.map(name => name + '!')
That's it! Notice that with this code we haven't:

created an iterator object
told the code when it should stop running
used the iterator to access a specific item in the people array
stored each new string in the excitedPeople array
...all of those steps are taken care of by JavaScript's .map() Array method.

### ex.
const people = ['Amanda', 'Geoff', 'Michael', 'Richard', 'Ryan', 'Tyler']
const longNames = people.filter(name => name.length > 6)

result: ["Michael", "Richard"]

## React Is Declarative
We'll get to writing React code very soon, but let's take another glimpse at it to show how it's declarative.

<button onClick={activateTeleporter}>Activate Teleporter</button>
It might seem odd, but this is valid React code and should be pretty easy to understand. Notice that there's just an onClick attribute on the button...we aren't using .addEventListener() to set up event handling with all of the steps involved to set it up. Instead, we're just declaring that we want the activateTeleporter function to run when the button is clicked.
Declarative Code Recap
Imperative code instructs JavaScript on how it should perform each step. With declarative code, we tell JavaScript what we want to be done, and let JavaScript take care of performing the steps.

React is declarative because we write the code that we want, and React is in charge of taking our declared code and performing all of the JavaScript/DOM steps to get us to our desired result.

## Unidirectional Data Flow
Data-Binding In Other Frameworks
Front-end frameworks like Angular and Ember make use of two-way data bindings. In two-way data binding, the data is kept in sync throughout the app no matter where it is updated. If a model changes the data, then the data updates in the view. Alternatively, if the user changes the data in the view, then the data is updated in the model. Two-way data binding sounds really powerful, but it can make the application harder to reason about and know where the data is actually being updated.

### Further Research
Angular's two-way data binding
Ember's two-way data binding

### React's Data-flow
Data moves differently with React's unidirectional data flow. In React, the data flows from the parent component to a child component.

Parent Component -> Child Component
Data flows down from parent component to child component. Data updates are sent to the parent component where the parent performs the actual change.
In the image above, we have two components:

* a parent component
* a child component

The data lives in the parent component and is passed down to the child component. Even though the data lives in the parent component, Both the parent and the child components can use the data. However, if the data must be updated, then only the parent component should perform the update. If the child component needs to make a change to the data, then it would send the updated data to the parent component where the change will actually be made. Once the change is made in the parent component, the child component will be passed the data (that has just been updated!).
Now, this might seem like extra work, but having the data flow in one direction and having one place where the data is modified makes it much easier to understand how the application works.

## Q:A FlightPlanner component stores the information for booking a flight. It also contains DatePicker and DestinationPicker as child components. Here's what the code might look like:

<FlightPlanner>
  <DatePicker />
  <DestinationPicker />
</FlightPlanner>

f this were a React application, which component(s) should be in charge of making updates to the data? Check all that apply.
result: FlightPlanner

* Since FlightPlanner is the parent component and stores the data, any changes to the data should be made by this component.


## If the following sample code were a React application, which of the following components should be in charge of making updates to the data? Check all that apply.

<FlightPlanner>

  <LocationPicker>
    <OriginPicker />
    <DestinationPicker />
  </LocationPicker>

  <DatePicker />

</FlightPlanner>

Result:
FlightPlanner and LocationPicker

* The component that stores the data should be the one that updates de data.

## Data-flow In React Recap
In React, data flows in only one direction, from parent to child. If data is shared between sibling child components, then the data should be stored in the parent component and passed to both of the child components that need it.

## map() example
The arrow function that's passed to .map() gets called for each item in the names array! The arrow function receives the first name in the array, stores it in the name variable and returns its length. Then it does that again for the remaining two names.

.map() returns a new array with the values that are returned from the arrow function:

const nameLengths = names.map( name => name.length );

So nameLengths will be a new array [7, 4, 5]. This is important to understand; the .map() method returns a new array, it does not modify the original array.

This was just a brief overview of how the .map() method works. For a deeper dive, check out .map() on MDN.

## Quiz: using map()
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

const albumSalesStrings = musicData.map(elem => `${elem.name} by ${elem.artist} sold ${elem.sales} copies`);

console.log(albumSalesStrings);

## Array's .filter() Method
JavaScript's Array .filter() method is similar to the .map() method:

it is called on an array
it takes a function as an argument
it returns a new array
The difference is that the function passed to .filter() is used as a test, and only items in the array that pass the test are included in the new array. Let's take a look at an example:

const names = ['Michael', 'Ryan', 'Tyler'];

const shortNames = names.filter( name => name.length < 5 );
Just as before, we have the starting array:

const names = ['Michael', 'Ryan', 'Tyler'];
We call .filter() on the names array and pass it a function as an argument:

names.filter( name => name.length < 5 );

Again, just like with .map() the arrow function that's passed to .filter() gets called for each item in the names array. The first item (i.e. 'Michael') is stored in the name variable. Then the test is performed - this is what's doing the actual filtering. It checks the length of the name. If it's 5 or greater, then it's skipped (and not included in the new array!). But if the length of the name is less than 5, then name.length < 5 returns true and the name is included in the new array!

And lastly, just like with .map() the .filter() method returns a new array instead of modifying the original array:

const shortNames = names.filter( name => name.length < 5 );

So shortNames will be the new array ['Ryan']. Notice that it only has one name in it now, because both 'Michael' and 'Tyler' are 5 characters or longer and were filtered out.

This was just a brief overview of how the .filter() method works. For a deeper dive, check out .filter() on MDN.

## Quiz: using filter()
Use the provided music data array and the .filter() method to create a new array that only contains albums with names between 10 and 25 characters long. Store the new array in a variable called results.

## Combining .map() And .filter() Together
What makes .map() and .filter() so powerful is that they can be combined. Because both methods return arrays, we can chain the method calls together so that the returned data from one can be a new array for the next.

const names = ['Michael', 'Ryan', 'Tyler'];

const shortNamesLengths = names.filter( name => name.length < 5 ).map( name => name.length );
To break it down, the names array is filtered, which returns a new array, but then .map() is called on that new array, and returns a new array of its own! This new array that's returned from .map() is what's stored in shortNamesLengths.

## .filter() First!
On a side note, you will want to run things in this order (.filter() first and then .map()). Because .map() runs the function once for each item in the array, it will be faster if the array were already filtered.

## .filter() and .map() Quiz
Using the same music data, use .filter() and .map() to filter and map over the list and store the result in a variable named popular. Use .filter() to filter the list down to just the albums that have sold over 1,000,000 copies. Then chain .map() onto the returned array to create a new array that contains items in the format:

<artist> is a great performer
The first item in the popular array will be 'Adele is a great performer'.

## React's Just JavaScript Recap
React builds on what you already know - JavaScript! You don't have to learn a special template library or a new way of doing things.

Two of the main methods that you'll be using quite a lot are:

.map()
.filter()

It's important that you're comfortable using these methods, so take some time to practice using them. Why not look through some of your existing code and try converting your for loops to .map() calls or see if you can remove any if statements by using .filter().
