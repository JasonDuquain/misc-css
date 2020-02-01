"use strict";


let optimized = false;

let btn = document.querySelector('.optimized');
let clrBtn = document.querySelector('.clear');

btn.addEventListener('click', (e) => {
    if (!optimized) {
        optimized = true;
        btn.textContent = 'unoptimized'
        makeTableOptimized();
        
    } else {
        optimized = false;
        btn.textContent = 'optimized'
        makeTableUnOptimized();
    }
});

clrBtn.addEventListener('click', (e) => tbody.innerHTML = '');

const tbody = document.querySelector("tbody");

/* UNOPTIMIZED: In this ex, we’re creating a total of 240K DOM nodes, populating a table with 20K rows of 6 cells, each containing a text node. This is incredibly expensive and will likely hang the browser for a noticeable period while executing, preventing the user from performing normal interactions */

function makeTableUnOptimized() {
    for (let i = 0; i < 60000; i++) {
        let tr = document.createElement('tr');
        for (let t = 0; t < 6; t++) {
            const td = document.createElement('td');
            td.append(i + "," + t);
            tr.append(td);
        }
        tbody.append(tr);
    }
    
}

/* OPTIMIZED: You may have been to a family reunion where a garrulous uncle won’t stop talking and insists on telling the same stories over and over again. If no one else gets a chance to break in and get a word in edgewise, the conversation’s not going to be pleasant. Likewise, code that hogs all the processing time results in an outcome that’s less than desirable; producing an unresponsive UI is never good. But situations will almost certainly arise that require us to process a significant amount of data, situations such as manipulating a couple of thousand DOM elements, for ex.

On these occasions, timers can come to the rescue and become especially useful.
Because timers are capable of effectively suspending the execution of a piece of
JS until a later time, they can also break individual pieces of code into fragments that aren’t long enough to cause the browser to hang. Taking this into account, we can convert intensive loops and operations into nonblocking operations.

In this example, we’re creating a total of 240K DOM nodes, populating a table
with 20K rows of 6 cells, each containing a text node. This is incredibly expensive
and will likely hang the browser for a noticeable period while executing, preventing
the user from performing normal interactions (much in the same way that Uncle
Bruce dominates the conversation).

What we need to do is shut up Uncle Bruce at regular intervals so that other people
can get a chance to join the conversation. In code, we can introduce timers to create
just such “breaks in the conversation,” as shown in the screenshot.

In this modification to the example, we’ve broken up the lengthy operation into 4
smaller operations, each creating its own share of DOM nodes. These smaller ops
are much less likely to interrupt the flow of the browser. Note that we’ve set it up so that the data values controlling the operation are collected into easily tweakable variables (rowCount, divideInto, and chunkSize), should we need to break the ops into, let’s say, ten parts instead of four.

Also important to note is the little bit of math needed to keep track of where we left
off in the previous iteration, base = chunkSize * iteration, and how we automatically
schedule the next iterations until we determine that we’re done:

if (iteration < divideInto)
    setTimeout(generateRows, 0);
    
What’s impressive is just how little the code has to change in order to accommodate
this new, asynchronous approach. We have to do a little more work to keep track of
what’s going on, to ensure that the operation is correctly conducted, and to schedule
the execution parts. But beyond that, the core of the code looks similar to what we
started with.

NOTE: In this case, we’ve used 0 for our time-out delay. If you’ve paid close
attention to how the event loop works, you know that this doesn’t mean that
the callback will be executed in 0 ms. Instead, it’s a way of telling the browser,
please execute this callback as soon as possible; but unlike with microtasks,
you’re allowed to do page rendering in between. This allows the browser to
update the UI and make our web apps more responsive.

The most perceptible change resulting from this technique, from the user’s perspective, is that a long browser hang is replaced with 4 (or however many we choose) visual updates of the page. Although the browser will attempt to execute the code segments as quickly as possible, it will also render the DOM changes after each step of the timer. In the original version of the code, it needed to wait for one large bulk update.

Much of the time, these types of updates are imperceptible to the user, but it’s important to remember that they do occur. We should strive to ensure that any code we introduce into the page doesn’t perceptibly interrupt the normal operation of the browser. It’s often surprising just how useful this technique can be. By understanding how the event loop works, we can work around the restrictions of the single-threaded browser environment, while still providing a pleasant experience to the user. */

function makeTableOptimized() {
    
    const rowCount = 60000;
    const divideInto = 4;
    const chunkSize = rowCount / divideInto;
    let iteration = 0;

    const table = document.getElementsByTagName("tbody")[0];
    
    setTimeout(function generateRows() {
        const base = chunkSize * iteration;
        for (let i = 0; i < chunkSize; i++) {
            const tr = document.createElement('tr');
            for (let t = 0; t < 6; t++) {
                const td = document.createElement('td');
                td.append(`${i + base} , ${t} , ${iteration}`);
                tr.append(td)
            }
            table.append(tr);
        }
        iteration++;
        (iteration < divideInto) ? setTimeout(generateRows, 0) : alert('done')
    }, 0)
    
}





