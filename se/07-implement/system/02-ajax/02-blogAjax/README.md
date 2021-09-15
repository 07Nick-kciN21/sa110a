# 練習 -- 使用 puppeteer 測試你的 AJAX 程式 (完整)

1. 請用 deno run -A app.js 執行 ，然後觀看 http://localhost:8000/
2. 使用 mocha + puppeteer 測試
  * mocha --timeout 100000
3. 仔細閱讀 test.js 與 app.js
  * 理解其中的程式碼關係！


```
csienqu-teacher:02-blogAjax csienqu$ mocha --timeout 100000


  blogAjax
    puppeteer
      ✓ GET / should see <p>You have <strong>0</strong> posts!</p> (360ms)


  1 passing (3s)

csienqu-teacher:02-blogAjax csienqu$ mocha --timeout 100000


  blogAjax
    puppeteer
      ✓ GET / should see <p>You have <strong>0</strong> posts!</p> (316ms)
      ✓ click createPost link (1814ms)
      ✓ fill {title:"aaa", body:"aaa"} (3332ms)
      ✓ should see <p>You have <strong>1</strong> posts!</p> (105ms)
      ✓ should see <p>You have <strong>1</strong> posts!</p> (646ms)


  5 passing (8s)
```