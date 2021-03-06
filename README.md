# wiki-react-typescript-practice

![github pages](https://github.com/biyokoyama/wiki-react-typescript-practice/workflows/github%20pages/badge.svg)
[![codecov](https://codecov.io/gh/biyokoyama/wiki-react-typescript-practice/branch/main/graph/badge.svg?token=LK6u8uuGoE)](https://codecov.io/gh/biyokoyama/wiki-react-typescript-practice) 

練習のため、[wiki-vue-typescript-practice](https://github.com/biyokoyama/wiki-vue-typescript-practice)をReactで作り直しています。  

デモページ↓  
https://biyokoyama.github.io/wiki-react-typescript-practice/search?q=  
※ モック機構を使っているため、永続化の仕組みはありません。編集できる風ですが、ブラウザリロードすると元に戻ります。  

## Note

### Lint

lint-staged, husky を利用しており、gitのpre-commitにhookしてLintが走るようになっています。  

### nodeのバージョン切替にavnやdirenvを利用している場合の注意

GUIのgitクライアント上でコミットすると、nodeバージョン起因のエラーが起こる場合があります。  
プロセスで.bash_profile が呼ばれず、avnやdirenvが働かないことが原因です。  

回避策1：システムデフォルトのバージョンを変更する
```
# (nvmの例)
$ nvm alias default 12
```

回避策2：.huskyrc で.bash_profileを読むようにする
```
$ echo 'source ~/.bash_profile' >> ~/.huskyrc
```
