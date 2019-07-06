# summer

### install

`yarn add summer-canvas`

### example

    .html
    <canvas id="canvas"></canvas>

    .js

    import Summer from 'summer-canvas'

    const canvas = new Summer({
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

    canvas.draw((img: string, size: { width: string, height: string }) => {

    })

### method

1. new Summer(<a href="#summerOptions">summerOptions</a>)
2. canvas.draw(doneCallback)

### options

#### <a name="summerOptions">summerOptions</a>

option | type | description
-| - | - |
canvasId | string | canvas element id
canvasWidth | number |
canvasHeight | number \| 'auto'
tasks | (<a href="#ImgInterface">ImgInterface</a> \| <a href="#RectInterface">RectInterface</a> \| <a href="#TextInterface">TextInterface</a> \| <a href="#WrapInterface">WrapInterface</a>)[]
ratio? | number | set in a variety of sizes
border? | <a href="#BorderInterface">BorderInterface</a>
background? | <a href="#BackgroundInterface">BackgroundInterface</a>
radius? | number