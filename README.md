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

1. new Summer(<a href="#SummerOptions">SummerOptions</a>)
2. canvas.draw(doneCallback)

### options

#### <a name="SummerOptions">SummerOptions</a>

option | type | description
-| - | - |
canvasId | string | canvas element id
canvasWidth | number |
canvasHeight | 'auto'
tasks | (<a href="#ImgOptions">ImgOptions</a> \| <a href="#RectOptions">RectOptions</a> \| <a href="#TextOptions">TextOptions</a> \| <a href="#WrapOptions">WrapOptions</a>)[]
ratio? | number | set in a variety of sizes
border? | <a href="#BorderOptions">BorderOptions</a>
background? | <a href="#BackgroundOptions">BackgroundOptions</a>
radius? | number

#### <a name="ImgOptions">ImgOptions</a> extends <a href="#TaskBaseOptions">TaskBaseOptions</a>

option | type | description
-| - | - |
type | 'img' |
width | number |
height? | number |
img | <a href="#ImgInfoOptions">ImgInfoOptions</a> \| string |
mode? | 'contain' \| 'cover' \| 'fill' |
backgroundColor? | string |
shadow? | <a href="#BoxShadowOptions">BoxShadowOptions</a> |
border? | <a href="#BorderOptions">BorderOptions</a> |


#### <a name="RectOptions">RectOptions</a> extends <a href="#TaskBaseOptions">TaskBaseOptions</a>

option | type | description
-| - | - |
type | 'rect'
border? | <a href="#BorderOptions">BorderOptions</a>
background? | <a href="#BackgroundOptions">BackgroundOptions</a>
shadow? | <a href="#BoxShadowOptions">BoxShadowOptions</a>

#### <a name="TextOptions">TextOptions</a> extends <a href="#TaskBaseOptions">TaskBaseOptions</a>

option | type | description
-| - | - |
type | 'text'
text | string
width? | number
fontSize? | number
lineHeight? | number
maxLine? | number
lastLineLeastNum? | number
color? | string
background? | <a href="#BackgroundOptions">BackgroundOptions</a>
radius? | number
border? | <a href="#BorderOptions">BorderOptions</a>
padding? | <a href="#PaddingOptions">PaddingOptions</a>
fontWeight? | 'normal' \| 'lighter' \| 'bold' \| number
textAlign? | 'left' \| 'center' \| 'right' \| 'start' \| 'end'

#### <a name="WrapOptions">WrapOptions</a> extends <a href="#TaskBaseOptions">TaskBaseOptions</a>

option | type | description
-| - | - |
type | 'wrap'
width? | number
height? | number | 'auto'
background? | <a href="#BackgroundOptions">BackgroundOptions</a>
radius? | number
padding? | number
border? | <a href="#BorderOptions">BorderOptions</a>
tasks | (<a href="#ImgOptions">ImgOptions</a> \| <a href="#RectOptions">RectOptions</a> \| <a href="#TextOptions">TextOptions</a> \| <a href="#WrapOptions">WrapOptions</a>)[]

#### <a name="TaskBaseOptions">TaskBaseOptions</a>

option | type | description
-| - | - |
id | string
hidden? | boolean
x? | number
y? | number
dependOn? | <a href="#DependOnOptions">DependOnOptions</a>
last? | <a href="#LastTaskOptions">LastTaskOptions</a>

<!-- isGetHeight? | boolean -->

#### <a name="BackgroundOptions">BackgroundOptions</a>

option | type | description
-| - | - |
color? | string
image? | string
mode? | 'fill' \| 'cover' \| 'contain'

#### <a name="DependOnOptions">DependOnOptions</a>

option | type | description
-| - | - |
id | string
direction | 'cross' \| 'vertical'
margin | number

#### <a name="LastTaskOptions">LastTaskOptions</a>

option | type | description
-| - | - |
margin | number

#### <a name="PaddingOptions">PaddingOptions</a>

option | type | description
-| - | - |
left? | number
top? | number
right? | number
bot? | number

#### <a name="ImgInfoOptions">ImgInfoOptions</a>

option | type | description
-| - | - |
img | HTMLImageElement
width | number
height | number

#### <a name="BoxShadowOptions">BoxShadowOptions</a>

option | type | description
-| - | - |
color? | string
offsetX? | number
offsetY? | number
blur? | number

#### <a name="BorderOptions">BorderOptions</a>

option | type | description
-| - | - |
width | number
color | string