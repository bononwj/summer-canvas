<template>
	<div class="hello">
		<div class="text" @click="handleStartDraw">{{text}}</div>
		<canvas id="canvas"></canvas>
		<canvas id="canvas_m"></canvas>
		<img v-if="img" :src="img" alt="" class="img">
		<img v-if="img_m" :src="img_m" alt="" class="img_m">
		<!-- <img src="../assets/1.png" alt="" class="img"> -->
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Summer from "../common/summer";

@Component
export default class HelloWorld extends Vue {
	
	text: string = '开始'
	img: string = ''
	img_m: string = ''
	
	handleStartDraw() {
		// this.singleImg()
		// this.shareImg()
	}

	mounted() {
		this.shareImg1()
		this.shareImg2()
	}
	
	shareImg1() {
		// http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyMjkyOTk5MDA2
		// http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyMjMxMTA1ODA5
		// http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyMjMxMTA3MDg1
		// http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyMjMxMTA4MDY1
		// let text = `sadfasfsadfasfsadfasfsadfasf asdfjkasda\n sadfasfsadfasfsadfasfsadfasfsadfasf\nadsfasdfasdfasd`
		// let text = `一二三四五六七八九`
		// let text = `一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十`

		let shareCanvas = new Summer(this.getHomeShare())
		this.text = '加载中'
		shareCanvas.draw((canvas: HTMLCanvasElement, size: { width: string, height: string }) => {
			
			// let tasks = shareCanvas.getElements()
			let theme_text_task = shareCanvas.getElementById('theme_text')
			let subtitle_text_task = shareCanvas.getElementById('subtitle_text')

			let left_line_rect_height = theme_text_task.height == 'auto' ? 0 : theme_text_task.height
			if (!subtitle_text_task.hidden) {
				left_line_rect_height = (subtitle_text_task.y + (subtitle_text_task.height == 'auto' ? 0 : subtitle_text_task.height)) - theme_text_task.y
			}

			shareCanvas.addDraw({
				type: 'rect',
				id: 'left_line_rect',
				x: 0,
				y: theme_text_task.y,
				width: 4,
				height: left_line_rect_height,
				background: {
					color: 'linear(to s, 0 #fff7be, 100% #f9b71c)'
				}
			}).then(() => {
				this.img = canvas.toDataURL("image/png")
				this.text = '加载完成'
			})
			// console.log('saa: ', size)
		})
	}
	shareImg2() {
		let shareCanvas = new Summer(this.getStarShare())
		// let shareCanvas = new Summer(this.getRadiusShare())
		this.text = '加载中'
		shareCanvas.draw((canvas: HTMLCanvasElement, size: { width: string, height: string }) => {
			this.img_m = canvas.toDataURL("image/png")
			this.text = '加载完成'
		})
	}

	getRadiusShare():any {
		return {
			ratio: 2,
			canvasId: 'canvas_m',
			canvasWidth: 317,
			// canvasHeight: 'auto',
			canvasHeight: 317,
			radius: 30,
			background: {
				color: '#6699FF'
			},
			tasks: [
				{
					type: 'img',
					id: 'banner_img',
					img: 'http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyNDAyNjE2OTEx',
					x: 0,
					y: 0,
					radius: 10,
					// hidden: true,
					width: 317,
				},
				{
					type: 'wrap',
					id: 'main_wrap',
					x: 0,
					y: 0,
					width: 317,
					height: 300,
					radius: 10,
					dependOn: {
						id: 'banner_img',
						direction: 'vertical',
						margin: 0
					},
					last: {
						margin: 0
					},
					background: {
						color: 'linear(to s, 0 #363F66, 100% #161627)'
					},
					tasks: [
						{
							type: 'text',
							id: 'theme_text',
							text: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十 asdfsf',
							x: 20,
							y: 16,
							width: 327,
							fontSize: 16,
							lineHeight: 24,
							maxLine: 200,
							fontWeight: 'bold',
							color: '#ffffff',
							textAlign: 'left',
						},
					]
				}
			]
		}
	}

	getHomeShare():any {
		return {
			ratio: 2,
			canvasId: 'canvas_m',
			canvasWidth: 317,
			// canvasHeight: 'auto',
			canvasHeight: 317,
			radius: 30,
			background: {
				color: '#363F66'
			},
			tasks: [
				{
					type: 'wrap',
					id: 'main_wrap_border',
					width: 317,
					// height: 120,
					height: 'auto',
					x: 0,
					y: 0,
					radius: 20,
					last: {
						margin: 2
					},
					background: {
						color: 'linear(to s, 0 #fff7be, 100% #f9b71c)'
					},
					tasks: [
						{
							type: 'img',
							id: 'banner_img',
							img: 'http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyNDAyNjE2OTEx',
							x: 0,
							y: 0,
							// hidden: true,
							width: 317,
							radius: '10 0 0 10'
						},
						{
							type: 'wrap',
							id: 'main_wrap',
							x: 0,
							y: 0,
							// hidden: true,
							width: 317,
							dependOn: {
								id: 'banner_img',
								direction: 'vertical',
								margin: 0
							},
							last: {
								margin: 0
							},
							background: {
								color: 'linear(to s, 0 #363F66, 100% #161627)'
							},
							tasks: [
								{
									type: 'text',
									id: 'theme_text',
									text: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十 asdfsf',
									x: 20,
									y: 16,
									width: 277,
									fontSize: 16,
									lineHeight: 24,
									maxLine: 2,
									fontWeight: 'bold',
									color: '#ffffff',
									textAlign: 'left',
								},
								{
									type: 'text',
									id: 'subtitle_text',
									text: 'ss一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十 asdfsf',
									x: 20,
									y: 16,
									hidden: true,
									width: 277,
									fontSize: 12,
									lineHeight: 18,
									maxLine: 2,
									fontWeight: 'bold',
									color: '#B6BCE2',
									textAlign: 'left',
									dependOn: {
										id: 'theme_text',
										direction: 'vertical',
										margin: 8
									},
								},
								{
									type: 'img',
									id: 'time_img',
									img: 'http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyNDAyNjE2OTEx',
									x: 20,
									y: 0,
									hidden: true,
									dependOn: {
										id: 'time_text',
										direction: 'vertical',
										margin: -15
									},
									width: 10,
									height: 10
								},
								{
									type: 'img',
									id: 'place_img',
									img: 'http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyMjMxMTA1ODA5',
									x: 20,
									y: 0,
									dependOn: {
										id: 'place_text',
										direction: 'vertical',
										margin: -15
									},
									width: 10,
									height: 10
								},
								{
									type: 'text',
									id: 'time_text',
									text: 'asdfasasdfasdf asdfsf',
									x: 40,
									hidden: true,
									width: 257,
									fontSize: 12,
									lineHeight: 18,
									maxLine: 1,
									dependOn: {
										id: 'subtitle_text',
										direction: 'vertical',
										margin: 16
									},
									color: 'rgb(128,136,180)',
									textAlign: 'left',
								},
								{
									type: 'text',
									id: 'place_text',
									text: '哈哈哈 asdfsfasdfasasdfasdf asdfsfasdfasasdfasdf asdfsfasdfasasdfasdf asdfsf',
									x: 40,
									width: 257,
									fontSize: 12,
									lineHeight: 18,
									maxLine: 1,
									dependOn: {
										id: 'time_text',
										direction: 'vertical',
										margin: 4
									},
									color: 'rgb(128,136,180)',
									textAlign: 'left',
								},
								{
									type: 'rect',
									id: 'mid_line_rect',
									x: 20,
									width: 277,
									height: 1,
									dependOn: {
										id: 'place_text',
										direction: 'vertical',
										margin: 18
									},
									background: {
										color: 'rgba(255,255,255,0.13)'
									}
								},
								{
									type: 'wrap',
									id: 'qrcode_wrap',
									x: 95,
									width: 128,
									height: 128,
									dependOn: {
										id: 'mid_line_rect',
										direction: 'vertical',
										margin: 18
									},
									background: {
										color: 'linear(to s, 0 #00DFFF, 50% #BC2EF9, 100% #FB2A6C)'
									},
									tasks: [
										{
											type: 'img',
											id: 'qrcode_img',
											img: 'http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyNDAyNjE2OTEx',
											x: 4,
											y: 4,
											last: {
												margin: 0
											},
											width: 120,
											height: 120
										},
									]
								},
								{
									type: 'text',
									id: 'tips_text',
									text: '「长按识别二维码，观看现场图片直播」',
									x: 317 / 2,
									fontSize: 10,
									lineHeight: 14,
									maxLine: 1,
									dependOn: {
										id: 'qrcode_wrap',
										direction: 'vertical',
										margin: 8
									},
									last: {
										margin: 22
									},
									color: 'rgb(255,255,255)',
									textAlign: 'center',
								},
							]
						},
					]
				}
			]
		}
	}

	getStarShare():any {
		return {
			ratio: 3,
			canvasId: 'canvas',
			canvasWidth: 343,
			canvasHeight: 'auto',
			// canvasHeight: 343,
			radius: 90,
			// canvasHeight: 200,
			// backgroundColor: 'red',
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
				},
				{
					type: 'rect',
					id: 'top_cicle',
					radius: 80,
					x: 92,
					y: 2,
					width: 158,
					height: 158,
					background: {
						color: '#181a25'
					}
				},
				{
					type: 'wrap',
					id: 'main_wrap_border',
					width: 343,
					// height: 120,
					height: 'auto',
					x: 0,
					y: 54,
					radius: 20,
					last: {
						margin: 2
					},
					background: {
						color: 'linear(to s, 0 #fff7be, 100% #f9b71c)'
					},
					tasks: [
						{
							type: 'wrap',
							id: 'main_wrap',
							width: 339,
							// height: 320,
							height: 'auto',
							x: 2,
							y: 2,
							radius: 18,
							last: {
								margin: 2
							},
							background: {
								mode: 'cover',
								image: 'http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyMjMxMDk3NDgx'
							},
							tasks: [
								{
									type: 'img',
									id: 'top_img',
									img: 'http://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYyMjMxMTA1ODA5',
									x: -2,
									y: -36,
									width: 343,
									height: 122
								},
								{
									type: 'img',
									id: 'photo_img',
									img: 'https://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYwOTUxOTYyODEy',
									x: 20,
									y: 105,
									radius: 5,
									width: 297,
									shadow: {
										offsetY: 4,
										blur: 9,
										color: 'rgba(0,0,0,0.9)'
									}
								},
								{
									type: 'img',
									id: 'qrcode_img',
									img: 'https://c360-o2o.c360dn.com/MTg1ODMyNjkxMDcxNTYwOTUxOTYyODEy',
									x: 22,
									y: 20,
									dependOn: {
										id: 'photo_img',
										direction: 'vertical',
										margin: 32
									},
									width: 64,
									height: 64
								},
								{
									type: 'text',
									id: 'qrcode_text',
									text: '扫码查看图片',
									x: 22,
									y: 4,
									width: 64,
									radius: 2,
									fontSize: 10,
									dependOn: {
										id: 'photo_img',
										direction: 'vertical',
										margin: 110
									},
									color: '#ffffff',
									textAlign: 'center'
								},
								{
									type: 'text',
									id: 'scan_text',
									text: '2200次浏览',
									x: 343 / 2,
									// x: 4,
									y: 4,
									background: {
										color: 'rgba(0,0,0,0.8)'
									},
									padding: {
										left: 8,
										top: 3,
										right: 8,
										bot: 8
									},
									radius: 2,
									fontSize: 12,
									lineHeight: 12,
									dependOn: {
										id: 'photo_img',
										direction: 'vertical',
										margin: -6
									},
									color: '#ffd970',
									textAlign: 'center',
								},
								{
									type: 'text',
									id: 'theme_text',
									text: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十 asdfsf',
									x: 109,
									width: 214,
									fontSize: 15,
									lineHeight: 22,
									maxLine: 2,
									dependOn: {
										id: 'photo_img',
										direction: 'vertical',
										margin: 30
									},
									fontWeight: 'bold',
									color: '#ffffff',
									// x: 171.5,
									textAlign: 'left',
								},
								{
									type: 'text',
									id: 'time_text',
									text: 'asdfasasdfasdf asdfsf',
									x: 109,
									width: 214,
									fontSize: 12,
									lineHeight: 18,
									maxLine: 1,
									dependOn: {
										id: 'photo_img',
										direction: 'vertical',
										margin: 86
									},
									color: 'rgb(108,112,135)',
									textAlign: 'left',
								},
								{
									type: 'text',
									id: 'place_text',
									text: '哈哈哈 asdfsfasdfasasdfasdf asdfsfasdfasasdfasdf asdfsfasdfasasdfasdf asdfsf',
									x: 109,
									width: 214,
									fontSize: 12,
									lineHeight: 18,
									maxLine: 1,
									last: {
										margin: 30
									},
									dependOn: {
										id: 'photo_img',
										direction: 'vertical',
										margin: 108
									},
									color: 'rgb(108,112,135)',
									textAlign: 'left',
								},
							]
						},
					]
				},
			]
		}
	}
}
</script>

<style scoped lang="less">
* {
	font-size: 0;
}
.text {
	margin: 0;
	font-size: 20px;
	color: #ffffff;
}
#canvas,#canvas_m {
	width: 160px;
	height: 200px;
}
.img,.img_m {
	// background: linear-gradient(to right, 10% #000, 100% #fff);
	width: 160px;
	margin-top: 90px;
}
</style>
