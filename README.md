# training-api-solo

Training for creating api

## Description

本ページでは都道府県 APIs のエンドポイントに関する情報を記載しています。
下記 API を利用することで各都道府県のデータを簡単に取得、追加、変更、削除することができます。

## APIs

下記エンドポイントに HTTP リクエストを送ることで、各種データを取得することが可能です。
API へは認証なしでアクセスすることが可能かつ件数制限もないため思う存分 HTTP リクエストを投げてください。

### GET /prefectureList

- 全都道府県のデータ一覧を返します。
- レスポンス：200

| name       | Description                        | Type    |
| ---------- | ---------------------------------- | ------- |
| id         | The identifier for this resource   | integer |
| region     | The region for this resource       | string  |
| prefec     | The prefecture for this resource   | string  |
| city       | The city for this resource         | string  |
| population | The population for this resource   | integer |
| density    | The density for this resource      | decimal |
| area       | The area for this resource         | decimal |
| homepage   | The homepage URL for this resource | string  |

### GET /prefectureList/{id or name}

- ID もしくは都道府県名で指定した都道府県のデータを返します。
- レスポンス：200

| name       | Description                        | Type    |
| ---------- | ---------------------------------- | ------- |
| id         | The identifier for this resource   | integer |
| region     | The region for this resource       | string  |
| prefec     | The prefecture for this resource   | string  |
| city       | The city for this resource         | string  |
| population | The population for this resource   | integer |
| density    | The density for this resource      | decimal |
| area       | The area for this resource         | decimal |
| homepage   | The homepage URL for this resource | string  |

### POST /add/prefecture

- ボディに都道府県データを格納して HTTP リクエストすることで、新しいレコードを追加することができます。
- レスポンス：200
- body 例

```
{
  id: 48,
  region: 'カリフォルニア',
  prefec: 'ロサンゼルス',
  city: 'ロサンゼルス',
  population: '3976322',
  density: '3276',
  area: '1301970',
  homepage: 'https://lacity.gov/'
}
```

### PATCH /edit/prefecture

- ボディに都道府県データを格納して HTTP リクエストすることで、既存のレコードを変更することができます。
- レスポンス：200
- body 例

```
{
  id: 48,
  region: 'ニューヨーク',
  prefec: 'ロサンゼルス',
  city: 'ロサンゼルス',
  population: '3976322',
  density: '3276',
  area: '1301970',
  homepage: 'https://lacity.gov/'
}
```

### DELETE /delete/prefecture/{id}

- id で指定した都道部権データを削除することができます。
- レスポンス：200
