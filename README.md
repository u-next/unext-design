> [!NOTE]
> こちらは実験的に作成中のページです。秘匿情報が含まれていません。


# U-NEXT DESIGN

![Logo](./public/meta/ogp.png)

## Setup

node環境が必要です

インストール
```
npm i
```

開発環境の起動
```
npm start
```

<br/><br/>

## ヒント

### 色変数
[global.css](./src/styles/global.css)内で[CSS変数](https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties)を定義しています。`color: var(--color-main);` のように使用してください。透明度を変更したい場合は `color: color-mix(in srgb, var(--color-main) 80%, transparent);` のように使用できます。

### budouX
文字組みライブラリの[google/budoux](https://github.com/google/budoux)をグローバルにimportしています。以下のように記述すると、デバイス幅に応じて最適な位置で文字が改行されます。

```.html
<p>
    <budoux-ja>
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう
    </budoux-ja>
</p>
```

### .lottieファイルの利用
Lottieアニメーションを利用できます。ただし`.json`ではなく`.lottie`形式でご利用ください。

> [!TIP]
> [こちら](https://lottiefiles.com/jp/tools/lottie-to-dotlottie)から変換できます。

`.lottie`ファイルは`/public/lottie`配下に保存してください。

```.html
<dotlottie-player autoplay loop src="/lottie/cat.lottie"></dotlottie-player>
```

こんな感じで使用できます。
