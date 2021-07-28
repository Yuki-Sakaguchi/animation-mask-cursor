# カーソルにくっついていくマスクの効いたポインター

https://yuki-sakaguchi.github.io/animation-mask-cursor/

# 説明

通常時に表示しておく要素の上の全く同じレイアウトでclip-maskを効かせた要素を置いておきます。  
初期値ではclip-maskの大きさは0にしておく  

jsで対象の要素にホバーしたらclip-mask: circle();の大きさを変更して上に重なっていた要素が見える様になる  
サンプルではアニメーションは[tween.js](https://github.com/tweenjs/tween.js/)を使っている  
css変数で位置とか大きさは管理してます。