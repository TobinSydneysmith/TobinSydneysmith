


// TimelineMax Animation

var tl1 = new TimelineMax({ delay: .7 });

tl1.from('#divide-anim', .3, {opacity:0});
tl1.from('#divide-anim', .7, {y:60}), '=.3';
tl1.from('#divide-anim-two', .7, {y:-30,opacity:0}, '-=.7');
tl1.from('#mobile-hero', .5, {opacity:0}, '=.3');
tl1.from('#logo', .8, {opacity:0,y:17.5, ease: Power4.easeOut});



// End Animation

