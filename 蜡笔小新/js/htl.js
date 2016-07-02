$(function() {
	//页面加载的时候，都让一些块放到合适的位置
	// 在首页返回按钮处于掩藏状态
	var aa = document.getElementById('aa');
	var timer = null;
	$('.back').hide();
	var wid = $(window).width();
	twPos();
	mfbPos();
	
	// 首页导航的三个按钮功能
		//图文按钮
	$('.tw').click(function() {
		$('.tw-main').siblings().fadeOut(800);
		$('.tw-main').delay(550).fadeIn(800);
		$('.tw-left').delay(800).animate({
			left: 0
		}, 1000, 'easeOutBounce');
		$('.tw-right').delay(800).animate({
			right: 0
		}, 1000, 'easeOutBounce');
		$('.back').fadeIn(800);
	});
		// 魔法棒的按钮
	$('.mb').click(function() {
		$('.mfb-main').siblings().fadeOut(800);
		$('.mfb-main').delay(550).fadeIn(800);
		$('.back').fadeIn(800);
		for(var i = 0; i < 4; i++) {
			var sep = Math.abs(i - 3);
			// 先让里面的小块，用定位的方式归位。只会再去除定位属性，改为浮动属性
			$('.mfb-t div').eq(i).delay((sep + 6) * 100).animate({'left': i * 164}, 1000, 'easeOutBounce', function() {
				$('.mfb-t div').css({
					position: 'static',
					float: 'left',
					marginLeft: '15px'
				})
				$('.mfb-t div').eq(0).css({
					marginLeft: '0px'
				})
			});
			// 先让里面的小块，用定位的方式归位。只会再去除定位属性，改为浮动属性
			$('.mfb-b div').eq(i).delay((sep + 6) * 100).animate({'right': i * 164}, 1000 ,'easeOutBounce', function() {
				$('.mfb-b div').css({
					position: 'static',
					float: 'right',
					marginRight: '15px'
				})
			});
		}
	});
		// 爱心按钮
	$('.heart').click(function() {
		$('.ax-main').siblings().fadeOut(800);
		$('.ax-main').delay(550).fadeIn(800, function() {
			aa.play();
			timer = setInterval(music, 10);
		})
		$('.back').fadeIn(800);
		aa.load();
	});

	// 返回首页的按钮功能
	$('.back span').click(function() {
		$('.back').fadeOut(800);
		$('.index').fadeIn(1000).siblings().fadeOut(800);
		twHide();  //图文页面消失时的效果
		mfbHide()	//魔法棒页面消失的效果
		clearInterval(timer);
		star();
		aa.pause(); //音乐停止播放
		$('.gc p').removeClass('select');
	});

	// 图文页面的效果制作
	// 图文页面最初始，里面的块的位置
	function twPos() {
		$('.tw-left').css('left', - wid / 2);
		$('.tw-right').css('right', - wid / 2 - 100);
	}
	// 按钮的点击事件
	$('.dw').click(function() {
		$('.dw-c').show();
	});
	$('.ppt').click(function() {
		$('.ppt-c').show();
	});
	$('.zz').click(function() {
		$('.zz-c').show();
	});
	$('.bq').click(function() {
		$('.bq-c').show();
	});
	$('.tp').click(function() {
		$('.tp-c').show();
	});
	$('.tb').click(function() {
		$('.tb-c').add($('.tb-del')).show();
	});
	$('.dw-del').click(function() {
		$('.dw-c').hide();
	});
	$('.ppt-del').click(function() {
		$('.ppt-c').hide();
	});
	$('.zz-del').click(function() {
		$('.zz-c').hide();
	});
	$('.bq-del').click(function() {
		$('.bq-c').hide();
	});
	$('.tp-del').click(function() {
		$('.tp-c').hide();
	});
	$('.tb-del').click(function() {
		$('.tb-c').add($(this)).hide();
	})
	// 图表
	$('.tb-c').highcharts({
		chart: {
			backgroundColor: '#ddd',
			type: 'line'
		},
		title: {
			text: ''
		},
		series: [{
			data: [3, 7, 9, 4]
		}],
		redits: {
			enabled: false  //去除版权的信息
		}
	})

	// 图文消失是的效果（点击了返回主页按钮）
	function twHide() {
		$('.tw-left').stop().animate({
			left: -20 + "px"
		}, 500, 'easeOutBounce', function() {
			$('.tw-left').stop().animate({
			left: -80 + "px"
		}, 200, 'easeOutBounce', function() {
			twPos();
		})
		});
		$('.tw-right').stop().animate({
			'right': -20 + 'px'
		}, 500, 'easeOutBounce', function() {
			$('.tw-right').stop().animate({
			'right': -80 + 'px'
		}, 200, 'easeOutBounce', function() {
			twPos();
		})
		});
	}



	// 魔法棒页面效果
	// 回复块的原始位置功能函数
	function mfbPos() {		
		for(var i = 0; i < 4; i++) {
			$('.mfb-t div').add('.mfb-b div').css('position', 'absolute');
			$('.mfb-t div').eq(i).css('left', -(i * 164 + wid));
			$('.mfb-b div').eq(i).css('right', -(i * 164 + wid));
		}
	}
	// 魔法棒页面消失的效果
	function mfbHide() {		
		$('.mfb-t div').add('.mfb-b div').css('position', 'absolute');
		for(var j = 0; j < 4; j++) {
			var sep = Math.abs(j - 3);
			$('.mfb-t div').eq(j).css({'left': j * 164}).delay(sep * 100 ).animate({
				left: j * 164 - 80 + 'px'
			},600, 'easeOutBounce', function() {
				mfbPos();
			})
			$('.mfb-b div').eq(j).css({'right': j * 164}).delay(sep * 100).animate({
				right: j * 164 - 80 + 'px'
			}, 600, 'easeOutBounce', function() {
				mfbPos();
			});
		}
	}
	// hover效果
	$('.far span').hover(function() {
		$(this).next().show().stop().animate({
			width: '140px'
		}, 1000);
		$(this).children().first().stop().fadeOut(1000).next().stop().fadeIn(1000);
	}, function() {
		$(this).next().hide(1000).stop().animate({
			width: '0'
		}, 1000);
		$(this).children().last().stop().fadeOut(1000).prev().stop().fadeIn(1000);
	});

	// 爱心页面
	$('.music-head span').click(function() {
		if(isPlay) {
			aa.pause();
			clearInterval(timer);
			isPlay = false;
			$('.music-head span').css({
				background: 'url("images/stop.png") no-repeat'
			})
		} else {
			aa.play();
			isPlay = true;
			timer = setInterval(music, 10);
			$('.music-head span').css({
				background: 'url("images/play.png") no-repeat'
			})
		}
	});
	// 把每一句歌词前面的时间，存入数组
	var timeArr = [6.82, 16.19, 18.79, 20.92, 22.76, 24.49, 26.75,28.49, 30.15, 31.71, 34.02, 37.40, 41.78, 43.95, 46.29, 51.15, 52.62, 58.31, 59.99, 65.54, 67.22, 91.48, 95.37, 98.74, 102.25, 106.11, 108.06, 113.15, 117.16, 119.69, 122.12, 126.98, 128.42, 134.06, 135.67, 141.31, 142.98, 150.16, 153.66, 157.26, 159.96, 160.83, 164.46, 168.20, 171.70, 175.41, 177.35, 179.85, 184.62, 186.19, 191.74, 193.44, 199.11, 200.76];
	var num = 0; //相当于进度条
	var topVal = 0; //歌词滚动距离
	var z = 0; //用来判断歌词是否要开始向上
	var isPlay = true; //控制播放按钮和暂停按钮的切换
	function music() {
		num += 0.01;
		// 如果一首歌结束了，则如下操作
		if(num >= 228) {
			star();
		}
		for(var i = 0; i < timeArr.length; i++) {			
			if(timeArr[i] == num.toFixed(2)) {
				z +=1;
				$('.gc p').eq(i).addClass('select').siblings()
				.removeClass('select');
				if(z >= 5) {
					topVal += 24;
					$('.gc').stop().animate({
						top: -topVal + 'px'
					}, 400);
				}
			}
		}
	}
	// 歌词的初始位置
	function star() {
		num = 0;
		z = 0;
		topVal = 0;
		$('.gc').css('top', 0);
	}
})