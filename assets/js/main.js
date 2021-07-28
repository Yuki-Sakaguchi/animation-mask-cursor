/**
 * アニメーション
 */
window.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.js-target');
  const skelton = document.querySelector('.js-skelton');

  const style = {
    mouseX: 0,
    mouseY: 0,
    scale: 0
  };

  // 表示時のアニメーション
  const enterTween = new TWEEN.Tween(style)
    .easing(TWEEN.Easing.Bounce.In)
    .to({ scale: 1 }, 500)
    .onUpdate(function() { style.scale = this.scale });

  // 非表示時のアニメーション
  const reaveTween = new TWEEN.Tween(style)
    .to({ scale: 0 }, 100)
    .onUpdate(function() { style.scale = this.scale });

  // マウスの動きに合わせて位置を更新
  function mouseMoveHandle (event) {
    // 動きにディレイをつける
    setTimeout(() => {
      style.mouseX = event.clientX - skelton.getBoundingClientRect().x;
      style.mouseY = event.clientY - skelton.getBoundingClientRect().y;
    }, 50)
  }

  // マウスが要素に乗った時の処理
  function mouseOverHandle (event) {
    reaveTween.stop();
    enterTween.start();
  }

  // マウスが要素から外れた時の処理
  function mouseOutHandle (event) {
    enterTween.stop();
    reaveTween.start();
  }

  // ループ処理
  function loop () {
    requestAnimationFrame(loop);
    skelton.style.setProperty('--loupeScale', style.scale);
    skelton.style.setProperty('--loupeX', style.mouseX); // 20は微調整
    skelton.style.setProperty('--loupeY', style.mouseY); // 30は微調整
    TWEEN.update();
  }

  // イベント設定
  window.addEventListener('mousemove', mouseMoveHandle);
  target.addEventListener('mouseover', mouseOverHandle);
  target.addEventListener('mouseout', mouseOutHandle);

  // 処理実行
  loop();
});