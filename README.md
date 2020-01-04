# ディレクトリ構成図を作る react.js の練習

## セットアップ方法

`.env.example` をコピーして `.env`を作成し、内容を環境に合わせて変更する  

`npm install`を行う  

## 実行手順

### 開発時

`.env`の`DEVELOP_DIR`に出力される

- リアルタイム更新 `npx gulp`
- ファイルの出力 `npx gulp dev`

### 本番用

`.env`の`PRODUCT_DIR`に出力される

- ファイルの出力 `npx gulp product`
- github pages へデプロイ `npx gulp deploy`

--

## 著作権表示とライセンス

Code Copyright 2020 Nozomi Nakamura. Code released under the [MIT license](/LICENSE) .
