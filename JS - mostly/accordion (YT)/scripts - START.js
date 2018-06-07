
let accordions = document.querySelectorAll(".accordion");

accordions.forEach((el) => {
    
    
    
});


/*

why null and not 0:

In this case, setting it to null is the intended action however because our goal is to remove the inline style completely, letting the stylesheet take over, which is set to a hard 0 value.

So, what is happening is when we use the content.styles.maxHeight to set the property equal to scrollheight we are creating an inline style onto the content element. So the CSS style of max-height: 0 on the stylesheet never changes. But CSS is designed so that inline styles take precedence over stylesheet styles. So when we expand the accordion what is actually happening is the stylesheet is still telling that element to have a max-height of 0. But javascript then adds an inline style to the element in the DOM telling the max-height to be whatever the scroll height for that content is (lets say 100px). So now the element's max height becomes 100px because the inline style is overriding the stylesheet style (which is still and always is 0). So the accordion expands to that maxheight.

Then when we set the maxHeight to null in javascript, what this is doing is removing the maxHeight inline style from the element in the DOM. Since there is no inline style anymore for the element, then that CSS property in the stylesheet of max-height: 0 takes over.

So we could set maxHeight to 0 in JS, but the inline style would stay on the element, it would just be set equal to 0. By setting it to null we are telling it to remove the inline style completely, letting the stylesheet take over (which is set to a hard 0).


*/



