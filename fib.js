// console.log("Hello world");

// Starting from 1 add previous
//  number to current number
function fibonacci(n){
    let fib = [0, 1];
    for (let i = 2; i < n; i++){

        fib[i] = fib [i -1] + fib[i -2]

    }
    return fib;

}
// console.log(fibonacci(100));




let sum = 0;
for (let i = 1; i <= 10; i++) { // Iterates from 2 to 10 (inclusive)
  sum += i;
}
// console.log(sum); // Output: 55 (2 + 3 + ... + 10)






// Drawing It


(()=>{
    'use strict';

    const canvas = document.getElementById('mycanvas')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    let minSide = w > h ? h : w
    let maxSide = w > h ? w : h

    const ctx = canvas.getContext('2d')
    const PI = Math.PI
    
    let opts = {
        cage: 20,
    }


    const center = {
        x: w / 2 - w / 2 % opts.cage,
        y: h / 2 -h / 2 % opts.cage
    }
    console.log(center)
    const colors = {
        bg: '#1d1f20',
        dark: '#1e1f26',
        light: '#444857' 
    }




    function fib(n) {
        if (!fib.cache) {
            fib.cache = {}
        }
        if (!fib.cache[n]) {
            fib.cache[n] = n < 3 ? 1 : fib(n - 1) + fib(n - 2)
        }
        return fib.cache[n]
    }

    let sequence = [...new Array(15)].map((e, i) => fib(i + 1))
    console.log(sequence)
    function draw_bg(side) {
        ctx.save()


        for (let i = side; i < maxSide; i += side) {
            ctx.beginPath()
            ctx.moveTo(i, 0)
            ctx.lineTo(i, h)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(0, i)
            ctx.lineTo(w, i)
            ctx.stroke()
        }
        ctx.restore()
    }




    function draw() {
        ctx.strokeStyle = colors.light
        ctx.lineWidth = 0.5
        ctx.fillStyle = colors.bg
        ctx.fillRect(0, 0, w, h)
        draw_bg(opts.cage)
        ctx.save()
        ctx.translate(center.x, center.y)
        ctx.fillStyle = colors.light
        ctx.lineWidth = 2

        sequence.forEach((e, i) => {
            let side = e * opts.cage
            ctx.lineWidth = 2
            ctx.strokeRect(0, 0, side, side)
            ctx.beginPath()
            ctx.moveTo(0, 0)
            
            ctx.arcTo(0, side, side, side, side)
            ctx.stroke()
            ctx.translate(side, side)
            ctx.rotate(-PI / 2)

        })
        ctx.restore()


    }
    draw()


})()