# 簡易新增

\> ng new 工作區名稱 --no-create-application

\> 在專案中

\> ng generate library 庫名稱  // (可不斷增加，本專案為mono-repo)

# 二級入口製作 ( Secondary Entry Points /  Multiple Entry Points)
二級入口可以進一步對套件包進行更詳細的分類，讓使用者能夠按需引入。

```ts
// 常見的二級入口引入方式，需要的元件再進行引入。
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
```

在新增library之後，在"library資料夾"中繼續新增資料夾 （project/__library__/....)。

在該資料下添加public-api.ts 並輸出該二級入口的元件。
並添加 ng-package.json 

```json
//ng-package.json
{
  "$schema": "../../../node_modules/ng-packagr/ng-package.schema.json", //注意相對路徑
  "lib": {
    "entryFile": "public-api.ts"
  }
}
```

這樣一來在build時就會自動產生二級入口。


# 專案主要入口處理方式
在上一個階段，我們做出了一個二級入口，不過原本library的主要入口依然存在，在此有幾種處理方式。

## 1. 捨棄主要入口
將主要入口移除，並全面僅限二級入口引用。

由於ng-packagr不支援空入口，因此將主要入口存在的public-api.ts改為下列內容(名稱與內容可變)：
```ts
export const MY_LIBRARY = "tinymce";
```
這樣一來就可以將主要入口的src資料夾刪除。


## 2. 主要＋次要
保持原本的結構，並將大部分的元件輸出放到主要入口進行輸出，特殊/附帶功能(測試模塊/記錄模塊)等在放到二級入口，依據需求引入。

## 3. 保留主要＋按需次要 (不建議)
繼續保留主要入口點，並讓主要入口點負責所有元件的統一輸出，而次要入口則提供自身功能的輸出，對於需要大量引入的可以直接使用主要入口全部引入，如只需要零星功能在按需從次要入口引入。


參考/延伸資料：https://sandroroth.com/blog/angular-library
