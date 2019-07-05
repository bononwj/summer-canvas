# summer

### install

`yarn add summer-canvas`

### example

    .html
    <canvas id="canvas"></canvas>

    .js
    canvas = new Summer({
        ratio: 1,
        canvasId: 'canvas',
        canvasWidth: 343,
        canvasHeight: 'auto',
        radius: 30,
        tasks: [
            {
                type: 'rect',
                id: 'top_cicle_border',
                radius: 80,
                x: 90,
                y: 0,
                width: 162,
                height: 162,
                background: {
                    color: 'linear(to s, 0 #fff7be, 100% #f9b71c)'
                }
            }
        ]
    })