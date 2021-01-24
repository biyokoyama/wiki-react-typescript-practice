# wiki-react-typescript-practice

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