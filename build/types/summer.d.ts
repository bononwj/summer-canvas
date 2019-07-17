interface PosInterface {
    bot: number;
}
interface BackgroundInterface {
    color?: string;
    image?: string;
    mode?: 'fill' | 'cover' | 'contain';
}
interface DependOnInterface {
    id: string;
    direction: 'cross' | 'vertical';
    margin: number;
}
interface LastItemInterface {
    margin: number;
}
interface ItemBaseInterface {
    x?: number;
    y?: number;
    id: string;
    radius?: number | string;
    hidden?: boolean;
    isGetHeight?: boolean;
    dependOn?: DependOnInterface;
    last?: LastItemInterface;
}
interface RectPathInterface extends ItemBaseInterface {
    width?: number;
    height?: number;
}
interface BoardPathInterface {
    x: number;
    y: number;
    width: number;
    height: number;
    radius: number | string;
}
interface PaddingInterface {
    left?: number;
    top?: number;
    right?: number;
    bot?: number;
}
interface SummerInterface {
    canvasId: string;
    canvasWidth: number;
    canvasHeight: number | 'auto';
    ratio?: number;
    border?: BorderInterface;
    background?: BackgroundInterface;
    tasks: (ImgInterface | RectInterface | TextInterface | WrapInterface)[];
}
interface ImgInfoInterface {
    img: HTMLImageElement;
    width: number;
    height: number;
}
interface ImgInterface extends RectPathInterface {
    type: 'img';
    height?: number;
    img: ImgInfoInterface | string;
    mode?: 'contain' | 'cover' | 'fill';
    backgroundColor?: string;
    shadow?: BoxShadowInterface;
    border?: BorderInterface;
}
interface RectInterface extends RectPathInterface {
    type: 'rect';
    border?: BorderInterface;
    background?: BackgroundInterface;
    shadow?: BoxShadowInterface;
}
interface TextInterface extends ItemBaseInterface {
    type: 'text';
    text: string;
    width?: number;
    height?: number;
    fontSize?: number;
    lineHeight?: number;
    maxLine?: number;
    lastLineLeastNum?: number;
    color?: string;
    background?: BackgroundInterface;
    border?: BorderInterface;
    padding?: PaddingInterface;
    fontWeight?: 'normal' | 'lighter' | 'bold' | number;
    textAlign?: 'left' | 'center' | 'right' | 'start' | 'end';
}
interface WrapInterface extends ItemBaseInterface {
    type: 'wrap';
    width?: number;
    height?: number | 'auto';
    background?: BackgroundInterface;
    padding?: number;
    border?: BorderInterface;
    tasks: (ImgInterface | RectInterface | TextInterface | WrapInterface)[];
}
interface BoxShadowInterface {
    color?: string;
    offsetX?: number;
    offsetY?: number;
    blur?: number;
}
interface BorderInterface {
    width: number;
    color: string;
}
interface TaskInfoInterface extends ItemBaseInterface {
    height?: number | 'auto';
    tasks: (ImgInterface | RectInterface | TextInterface | WrapInterface)[];
    runLength: number;
    runWaitLength: number;
    waitQueue: (ImgInterface | RectInterface | TextInterface | WrapInterface)[];
    runQueue: (ImgInterface | RectInterface | TextInterface | WrapInterface)[];
    done: Function;
    setWrapHeight: Function;
}
export default class Summer {
    isInit: boolean;
    ratio: number;
    canvas: HTMLCanvasElement;
    canvasWidth: number;
    canvasHeight: (number | 'auto');
    ctx: CanvasRenderingContext2D;
    tasks: (ImgInterface | RectInterface | TextInterface | WrapInterface)[];
    border: BorderInterface | undefined;
    background: BackgroundInterface | undefined;
    constructor(options: SummerInterface);
    draw(callback: Function): void;
    drawWrap(info: WrapInterface): Promise<PosInterface>;
    checkWaitQueue(taskInfo: TaskInfoInterface, prevTask: (ImgInterface | RectInterface | TextInterface | WrapInterface), pos: {
        bot: number;
    }): void;
    runTask(taskInfo: TaskInfoInterface, currentTask: (ImgInterface | RectInterface | TextInterface | WrapInterface)): void;
    drawImg(info: ImgInterface): Promise<PosInterface>;
    drawRect(info: RectInterface): Promise<PosInterface>;
    drawText(info: TextInterface): Promise<PosInterface>;
    drawBoxShadow(shadow: BoxShadowInterface, info: BoardPathInterface): void;
    drawBoxBorder(border: BorderInterface, info: BoardPathInterface): void;
    drawBoardPath(info: BoardPathInterface): void;
    setShadow(shadow: BoxShadowInterface): void;
    getImgInfo(imgUrl: string): Promise<ImgInfoInterface>;
    getElements(): (ImgInterface | RectInterface | TextInterface | WrapInterface)[];
    getElementById(id: string): (ImgInterface | RectInterface | TextInterface | WrapInterface);
    getTask(id: string, tasks: any): (ImgInterface | RectInterface | TextInterface | WrapInterface);
    addDraw(_task: (ImgInterface | RectInterface | TextInterface | WrapInterface)): Promise<PosInterface>;
}
export {};
