function createText(content){
  var newText = document.createElement("li");
  newText.setAttribute('class','chatText');
  newText.innerHTML = '<span>'+content+'</span>';
  document.getElementById('chat').appendChild(newText);
};

function clearChat(){
  chat = document.getElementById('chat');
  chat.innerHTML = '';
};

//-----------------------------------
function p00(){
  createText('嗨👋！我是夜猫子！(点我继续～)➡️');
  onclick = function(){p01()};
}
function p01(){
   clearChat();
    createText('宇宙的尽头是考公 变美的尽头是养生，➡️');
  onclick = function(){p02()};
  }

function p02(){
  clearChat();
  createText('所谓“养生”就是根据生命规律，➡️');
  onclick = function(){p03()};
  }
function p03(){
  clearChat();
  createText('采用养护身心，保持或增进健康，减少疾病，以延年益寿的一种措施，一种适合中国宝宝的保健运动。➡️');
  onclick = function(){p04()};
  }
  function p04(){
    clearChat();
    createText('中医养生的方法包括饮食调理、运动锻炼、按摩推拿、针灸等多种方式。➡️');
  onclick = function(){p05()};
    }
    function p05(){
      clearChat();
      createText('帮你从“老腊肉”变回“小鲜肉”。➡️');
  onclick = function(){p06()};
      }
      function p06(){
    clearChat();
    createText('正确的生活作息习惯，营养均衡对人体进行科学调养，保持生命健康活力。➡️');
    onclick = function(){p07()};

  }
  function p07(){
clearChat();
createText('不说了，劳资明天要早起！(向下滑动继续)');

}
//----------------------------
p00();
