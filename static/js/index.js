let livePlayer;

function wowzaSetting(wawza_config){
   // wowzaプレイヤーインスタンスの作成
  livePlayer = WowzaPlayer.create('livePlayer', wawza_config);
}

function liveChecker() {
  // ライブ映像の状態
  let result;
  let state = livePlayer.getCurrentState();
  if(livePlayer.isLive() && livePlayer.isPlaying() && state == 5) {
    result = true;
  }else {
    result = false;
  }
  console.log([livePlayer.getCurrentState(), result]);
}

function backToTenSecAgo() {
  // 10秒前に戻るボタン
  // uiShowQuickRewindとか使えば楽に実装できるやつ
  let currentTime = livePlayer.getCurrentTime();
  let newTime = currentTime - 10000;
  livePlayer.seek(newTime);
}

function goToLast() {
  // seekで最後に行くボタン
  let duration = livePlayer.getDuration();
  livePlayer.seek(duration);
}
