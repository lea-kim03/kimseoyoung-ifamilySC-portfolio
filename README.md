# 김서영 아이패밀리SC 지원 페이지

React와 Vite 기반의 개인 지원 페이지입니다.

## 실행

```bash
npm install
npm run dev
npm run build
```

## 라우트

- `/` 홈
- `/resume-career` 이력서 및 경력기술서
- `/cover-letter` 자기소개서
- `/portfolio` 포트폴리오

## Vercel 배포

Vercel에서 이 저장소를 연결한 뒤 Framework Preset을 Vite로 선택합니다. Build Command는 `npm run build`, Output Directory는 `dist`를 사용합니다. `vercel.json`의 rewrite 설정으로 각 문서 URL 새로고침이 정상 작동합니다.
