# 🚀 React Native App

Ứng dụng mobile được xây dựng bằng **React Native (0.80.2)** + **React (19.1.0)** với kiến trúc hiện đại:

- Quản lý server state bằng **TanStack Query**(https://tanstack.com/query/latest)
- Dùng Keychain (iOS) và Keystore (Android) để lưu token **Keychain Access for React Native**(https://github.com/oblador/react-native-keychain)
- Local storage hiệu năng cao với **MMKV**(https://github.com/mrousavy/react-native-mmkv)
- Validation bằng **Zod**(https://zod.dev/)
- Hỗ trợ đa ngôn ngữ với **i18next**(https://www.i18next.com/)
- Navigation bằng **React Navigation v7**(https://reactnavigation.org/)
- Debug dễ dàng với **Reactotron**(https://docs.infinite.red/reactotron/quick-start/react-native/)

---

## 📦 Tech Stack

### ⚛️ Core

- **react (19.1.0)** – Thư viện chính để xây dựng UI.
- **react-native (0.80.2)** – Framework cho ứng dụng mobile native.

### 🧭 Navigation

- **@react-navigation/native** + **@react-navigation/stack** – Điều hướng màn hình.
- **react-native-gesture-handler**, **react-native-screens**, **react-native-safe-area-context**, **masked-view** – Dependencies cần thiết cho navigation.

### 🔄 State, Data & Safe

- **@tanstack/react-query** – Quản lý server state, caching, re-fetch.
- **react-native-mmkv** – Storage local key-value nhanh, thay thế AsyncStorage.
- **zod** – Validation schema (API response, form).
- **react-native-keychain** - Quản lý và lưu trữ thông tin nhạy cảm như: Password

### 🌍 Internationalization

- **i18next** + **react-i18next** – Quản lý đa ngôn ngữ.
- **intl-pluralrules** – Hỗ trợ pluralization.

### 🎨 UI & Animation

- **react-native-reanimated** – Animation hiệu năng cao.
- **react-native-svg** + **react-native-svg-transformer** – Render SVG assets.
- **react-native-worklets** – Viết logic animation bằng worklets (JSI).

### 🛡️ Error Handling

- **react-error-boundary** – Bọc UI, bắt runtime error.

### 🐛 Debugging / Dev Tools

- **reactotron-react-native** – Debug logs, state, network.
- **reactotron-react-native-mmkv** – Debug MMKV storage.
- **reactotron-react-query** – Debug React Query cache.

### 🧪 Testing

- **jest** + **@testing-library/react-native** – Unit & integration tests.
- **react-test-renderer** – Snapshot testing.

---

## 📂 Folder Structure

```bash
src
├── api/               # Networking (Ky/Axios + React Query hooks)
│   ├── client.ts      # HTTP client config
│   ├── hooks/         # Custom hooks dùng React Query
│   └── services/      # API endpoints
│
├── assets/            # Hình ảnh, SVG, fonts
│
├── components/        # Reusable UI components
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
│
├── features/          # Feature-based modules
│   ├── auth/
│   │   ├── screens/
│   │   ├── hooks/
│   │   └── services/
│   └── profile/
│
├── i18n/              # i18next config + translations
│   ├── index.ts
│   └── locales/
│       ├── en.json
│       └── vi.json
│
├── navigation/        # React Navigation stacks/tabs
│   ├── RootNavigator.tsx
│   └── AppNavigator.tsx
│
├── store/             # UI state (Zustand/Redux nếu cần)
│
├── utils/             # Helper functions (formatDate, constants...)
│
├── App.tsx            # Entry point
└── index.js           # RN bootstrap
```
