## template-/next-server-action/recoil/tailwind-shadcn/prisma

- next@14/server-action
- next-auth
- recoil-persist
- tailwind-shadcn
- prisma-mongo

> 패키지 설치

```
pnpm i
```

> env 설정

```
NODE_ENV=
APP_PORT=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
DB_URL=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_ID=""
GITHUB_SECRET=""
```

> 로컬 실행

```
pnpm dev
```

> DB 생성 (개발)

```
pnpm db:gen:dev
pnpm db:push:dev
```

> 빌드

```
pnpm build
```

Jaekyeong Yuk
