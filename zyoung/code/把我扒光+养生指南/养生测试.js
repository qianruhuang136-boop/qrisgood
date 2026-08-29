function createText(content){
  var newText = document.createElement("li");
  newText.setAttribute('class','chatText');
  newText.innerHTML = '<span>'+content+'</span>';
  document.getElementById('chat').appendChild(newText);
};

function creatButton(name,content){
    var newB = document.createElement('button');
    newB.id = name;
    newB.setAttribute('class','buttons');
    newB.innerHTML = content;
    document.getElementById('panic').appendChild(newB);
};

function clearChat(){
  chat = document.getElementById('chat');
  chat.innerHTML = '';
};

function clearPanic(){
  panic = document.getElementById('panic');
  panic.innerHTML = '';
};


//-----------------------------------
function p00(){
  createText('朋克养生，顾名思义就是一种一边作死一边惜命的养生观念。从前不懂亲戚群的养生推文');
  createText('到如今加入年纪轻轻的养生大军，你感觉到自己身体的变化了吗？来测试一下你的朋克养生等级吧！');
  creatButton('a10','我准备好了！');
  creatButton('a11','我后悔了，我想再逛逛其他的……');
  document.getElementById('a10').onclick = function(){p01()};
  document.getElementById('a11').onclick = function(){c06()};
}
function p01(){
  clearChat();
  clearPanic();
  createText('第一关：冬天在外聚餐，服务生询问喝点什么，你点了一杯（         ）');
  creatButton('a11','超大杯冰美式备注去冰');
  creatButton('a12','热拿铁');
  document.getElementById('a11').onclick = function(){p02()};
  document.getElementById('a12').onclick = function(){p02()};
}
function c06(){
  clearChat();
  clearPanic();
  createText('你已经没有回头路啦！没有准备好也要继续哦😎，后续会根据你的养生状态匹配好物推荐～');
  creatButton('a33','好吧我继续……');
  document.getElementById('a33').onclick = function(){p01()};
}

function p02(){
  clearChat();
  clearPanic();
  createText('第二关：加班回家后发现十二点了，你（         ）')
  creatButton('a21','洗脸刷牙睡觉');
  creatButton('a22','熬最深的夜，敷最贵的面霜（图敷面膜玩手机）');
  document.getElementById('a21').onclick = function(){p03()};
  document.getElementById('a22').onclick = function(){p03()};
}

 function p03(){
   clearChat();
   clearPanic();
   createText('第三关：冬天到了，你的穿搭（ootd)是（         ）')
   creatButton('a31','全身武装，保暖裤穿起来');
   creatButton('a32','军大衣披身上，下身破洞裤或短裙');
   document.getElementById('a31').onclick = function(){p04()};
   document.getElementById('a32').onclick = function(){p04()};
 }

 function p04(){
   clearChat();
   clearPanic();
   createText('第四关：办公桌你常备的零食是（         ）')
   creatButton('a41','燕窝桃胶养生茶');
   creatButton('a42','黄瓜味的薯片');
   document.getElementById('a41').onclick = function(){p05()};
   document.getElementById('a42').onclick = function(){p05()};
 }

 function p05(){
   clearChat();
   clearPanic();
   createText('第五关：忙碌了一周，周末你会（        ）')
   creatButton('a51','好好休息一下，去健个身');
   creatButton('a52','带护膝蹦迪');
   document.getElementById('a51').onclick = function(){p06()};
   document.getElementById('a52').onclick = function(){p06()};
 }

 function p06(){
   clearChat();
   clearPanic();
   createText('第六关：早C晚A你的理解是（       ）')
   creatButton('a61','早上用含维C类的护肤品，晚上用含维A类的护肤品');
   creatButton('a62','早上coffee 晚上alcohol');
   document.getElementById('a61').onclick = function(){p07()};
   document.getElementById('a62').onclick = function(){p07()};
 }
 function p07(){
   clearChat();
   clearPanic();
   createText('第七关：为了健身减脂，你的购物车里加了（  ')
   creatButton('a71','鸡胸肉鸡蛋新鲜的蔬菜');
   creatButton('a72','饼干薯片奶茶（零糖低脂高膳食纤维）');
   document.getElementById('a71').onclick = function(){p08()};
   document.getElementById('a72').onclick = function(){p08()};
 }
 function p08(){
   clearChat();
   clearPanic();
   createText('第八关：晚饭你一般选择（      ）')
   creatButton('a81','清淡饮食，沙拉是不二选择。');
   creatButton('a82','火锅炸鸡小烧烤配凉茶');
   document.getElementById('a81').onclick = function(){p12()};
   document.getElementById('a82').onclick = function(){c00()};
 }

 function c00(){
   clearChat();
   clearPanic();
   creatButton('a83','朋克养生骨灰级玩家！');
   document.getElementById('a83').onclick = function(){c01()};
 }

 function c01(){
   clearChat();
   clearPanic();
   createText('朋克养生说得就是你！对你来说饮食均衡，就是喝最烈的酒，泡最红的枸杞。（点击任意位置继续）➡️➡️');
   onclick = function(){c07()};
}

function c07(){
  clearChat();
  clearPanic();
  createText('朋克养生说得就是你！对你来说饮食均衡，就是喝最烈的酒，泡最红的枸杞。（点击任意位置继续）➡️');
  onclick = function(){c02()};
}

function c02(){
  clearChat();
  clearPanic();
  createText('你会熬最深的夜，敷最贵的面膜；，又或者，你会一边“宝娟，我的嗓子”一边吃着最烈的烧烤火锅。➡️');
  onclick = function(){c03()};
}

function c03(){
  clearChat();
  clearPanic();
  createText('你很特别———— ➡️');
  onclick = function(){c04()};
}

function c04(){
  clearChat();
  clearPanic();
  createText('你以喝酒熬夜为荣/用党参枸杞续命/一口服下钙片鱼肝油月见草益母草维生素B的样子酷炸宇宙。');
  creatButton('e11','进入专属我的好物推荐～');
}

function p12(){
  clearChat();
  clearPanic();
  creatButton('a83','补救型养生佛系玩家！');
  document.getElementById('a83').onclick = function(){e00()};
}

 function e00(){
   clearChat();
   clearPanic();
   createText('佛门大军一员～有时候你也会偶尔养生朋克一下。（点击任意位置继续）➡️');
   onclick = function(){e07()};
 }

 function e07(){
   clearChat();
   clearPanic();
   createText('佛门大军一员～有时候你也会偶尔养生朋克一下。（点击任意位置继续）➡️');
   onclick = function(){e01()};
 }

 function e01(){
   clearChat();
   clearPanic();
   createText(' 在放纵自己的时候你的心是虚的，担心自己的放纵会给身体带来伤害，所以如果选择了熬夜，就不敢再用烧烤来充当夜宵。➡️');
   onclick = function(){e02()};
}

 function e02(){
   clearChat();
   clearPanic();
   createText('如果晚上炸鸡小烧烤，第二天就会健身跑三圈。➡️');
   onclick = function(){e03()};
 }

 function e03(){
   clearChat();
   clearPanic();
   createText('你日常随缘，放纵克制很随心情，你最爱在收藏夹里收藏养生方法，但从未执行过。➡️');
   onclick = function(){e04()};
 }

 function e04(){
   clearChat();
   clearPanic();
   createText('一个佛系的人，再坏也坏不到哪去，这就是我的善恶观，佛门。');
   creatButton('e12','进入专属我的好物推荐～');

 }

 function p13(){
   clearChat();
   clearPanic();
   createText('精致型养生猪猪女孩');
   createText('你很少“朋克养生”但有时候也会小小的放纵一下。你对养生知识了如指掌，不能乱吃东西，该早睡早起，到点了就睡觉到点了就起床。你注意自己的身体。你已经开始服老了，开始在“相亲相爱一家人”里转发养生推送。你的购物车里都是：泡脚桶按摩椅黑芝麻何首乌之类的养生产品，在你的眼里，养生保养是终身事业。');
 }


//----------------------------
p00();
