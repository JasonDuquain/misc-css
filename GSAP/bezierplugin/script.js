var box01 = document.querySelector('#box01'),
    box02 = document.querySelector('#box02'),
    box03 = document.querySelector('#box03'),
    path = [{x:0, y:0}, {x:125, y:-80}, {x:250, y:0}],
    path2 = [{x:0, y:0}, {x:125, y: 80}, {x:250, y:0}],
    path3 = [{x: 0, y: 0},{x: 50, y: 50},{x: 120, y: 0},{x: 200, y: 50},{x: 250, y: 0}],
    tl = new TimelineMax({repeat: 3, yoyo: true});



/* COMPLETE

var box01 = document.querySelector('#box01'),
    box02 = document.querySelector('#box02'),
    box03 = document.querySelector('#box03'),
    path = [{x:0, y:0}, {x:125, y:-80}, {x:250, y:0}],
    path2 = [{x:0, y:0}, {x:125, y: 80}, {x:250, y:0}],
    path3 = [{x: 0, y: 0},{x: 50, y: 50},{x: 120, y: 0},{x: 200, y: 50},{x: 250, y: 0}],
    tl = new TimelineMax({repeat: 3, yoyo: true});


tl.to(box01, 1, {
    bezier: {
        curviness: 0.3, 
        values:path
    },
    ease:Power1.easeInOut
})
.to(box02, 1, {
    bezier: {
        curviness: 0.3, 
        values:path2}, 
        ease:Power1.easeInOut
})
.to(box03, 1, {
    bezier: {
        curviness: 0.3, 
        values:path3
    }, 
    ease:Power1.easeInOut
});

*/
