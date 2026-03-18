# read-log

차분한 북 저널 분위기의 독서 기록 앱입니다.

현재는 프로젝트 초기 세팅 단계이며, React + TypeScript + Vite + Tailwind CSS v4 기반으로 공통 UI와 기능 구조를 정리하고 있습니다.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Zustand
- Dexie

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Structure

```text
src/
  features/
    book/
  shared/
    components/
      ui/
    libs/
    styles/
```

## Notes

- 디자인 토큰은 `src/shared/styles/global.css`에서 관리합니다.
- 공통 UI 컴포넌트는 `src/shared/components/ui`에 모아둡니다.
- 현재는 한 페이지 안에 독서 기록 기능 섹션을 쌓아가는 방향으로 작업 중입니다.
