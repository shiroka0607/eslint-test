### ESLint, Pretteirの設定と挙動確認

使用予定のパッケージを設定し、軽微ではあるがコードを作成してLintの挙動を確認する。

以下のパッケージを使用
- eslint-config-airbinb
  - airbnbのスタイルガイド
  - JS, React / JSX に対応
- eslint-config-airbnb-typescript
  - airbnb のTypeScript版パッケージ
- plugin:react/recommended
- next/core-web-vitals
- prettier

以下のルールを追加
- @typescript-eslint/explicit-module-boundary-types
  - 関数の返り値の型を明記する
- react/function-component-definition
  - 関数コンポーネントの宣言にアロー関数を使用する
 
  
