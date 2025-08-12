# 프로젝트 Init

- npm init -y
- npm i -D eslint prettier
- npm i -D eslint-config-prettier
- npm i -D sass

```json
  "scripts": {
    "sass": "sass --watch ./src/assets/scss/main.scss ./src/assets/css/main.css"
  },
```

---

# 모바일 해상도 및 대응

- 해상도 대응 : 320px(최소) ~ 900px
- base font size(html) : 16px / 1rem
- size units : rem 단위 사용
- gutter : 1rem / 1.25rem

# Class Naming Rules

- kebab-case : 범위 영역 (소단위를 감싸는 박스 영역), 예) container-box, wrapper-page1 등
<!-- - snake_case : 범위 내 공통 요소(소단위) 등 예) txt_month,  -->
- 꾸미는 용도의 클래스는 지양. (p-0, border-bottom 등)
- 레이아웃 태그에 클래스 직접 사용 (header, aside, main, section 등)
- 동일한 포맷에 유니크한 영역이 있는 경우 별도 클래스 지정 (header header-'pages')
- 공통 제작된 컴퍼넌트 단위 스타일 상속하되, 별도 클래스에 스타일 수정
- SCSS 최상위 클래스 Nesting(중첩)하여 모듈화 컴퍼넌트 제공

---

# html (pages)

## /layout/\*.html

> ASIDE, HEADER 등 레이아웃 공통 영역

## /components

> 퍼블 페이지에서 공통으로 사용되는 영역 모음

---

# js (assets/js)

## /common.js

> 공통 event

## /{page}\_\*?\_common.js

> 페이지/컴퍼넌트별 event
> 예) dashboard_common.js, issue_common.js 등

## /js/vendor

> 라이브러리, 플러그인 등 폴더별 관리
>
> > jQuery v3.6.0
> > ApexCharts v4.3.0
> > Bootstrap v5.2.3
> > Datepicker v2.2.3
> > Summernote vbs5

---

# SCSS (assets/scss)

## /bootstrap

> 부트스트랩 scss / custom bootstrap variable
> 부투스트랩 아이콘은 CDN 참조 (용량이 커서 직접 관리하지 않음)

## /components

> 공통으로 사용하고자 하는 컴퍼넌트 단위별 작성

## /pages

> 페이지 별 scss 작성

---

## formatter

Prettier 적용

### .prettierrc

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120,
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "tabWidth": 2,
        "printWidth": 500,
        "singleQuote": false
      }
    },
    {
      "files": "*.{scss,css}",
      "options": {
        "tabWidth": 2,
        "singleQuote": true
      }
    },
    {
      "files": ["*.js", "*.jsx", "*.json"],
      "options": {
        "trailingComma": "all",
        "semi": false
      }
    }
  ]
}
```

### .vscode/settings.json

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "liveServer.settings.port": 5502
}
```
