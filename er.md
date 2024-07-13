# ER図

![not found](er.jpg)

## characters キャラクター
|要素名|データ型|説明|その他|
| ---- | ---- | ---- | ---- |
| name | string | 名前 | |
| production_name | string | 作品名 | |

## likes いいね

|要素名|データ型|説明|その他|
| ---- | ---- | ---- | ---- |
| user_id | | |
| post_id | | |

## logins ログイン情報

|要素名|データ型|説明|その他|
| ---- | ---- | ---- | ---- |
| user_id | | |
| login_at | date | ログイン日時 | |

## posts 投稿情報

|要素名|データ型|説明|その他|
| ---- | ---- | ---- | ---- |
| user_id | | |
| character_id | | |
| body | text | 内容 | |
| point | int | 得点 | |

## titles 称号情報

|要素名|データ型|説明|その他|
| ---- | ---- | ---- | ---- |
| name | string | 名前 | |
| explanation | text | 称号の説明 | |

## users ユーザ情報

|要素名|データ型|説明|その他|
| ---- | ---- | ---- | ---- |
| name | string | 名前 | |
| email | string | メールアドレス | unique |
| password | string | パスワード | hash |