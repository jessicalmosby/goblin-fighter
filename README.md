## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Look at the drawing and name the HTML elements you'll need to realize your vision**
1. **Look at the drawing and imagine using the app. What _state_ do you need to track?**
1. **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1. **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)

![wireframe](/assets/wireframe.png)

### State

-How many goblins have been defeated<br>
-Player HP<br>
-Goblin HP<br>
-#Current ID (in order to create new goblins with ID's)<br>

### Events

-user input<br>
-goblin clicks<br>
-Alerts with no change:<br>
--You missed<br>
--{name} missed<br>
-Alerts with change:<br>
--You hit {name} = {name}HP--<br>
--{name} hit you = your HP--<br>
-when HP is 0<br>
--Alert game over<br>
--rotate player emoji 90 deg.<br>
--Form: user inputs Goblin name, when submit button is clicked:<br>
---make new goblin<br>
---add object to goblin array<br>
---update list display:<br>
---clear out the list DOM<br>
---loop through the goblins<br>
---render a new goblin el. for ea. item<br>
---append ea. el. to the container el. (goblin-stats)<br>
