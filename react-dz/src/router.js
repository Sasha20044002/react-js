import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Chat from './pages/chats/Chat';
import chat1 from './pages/chats/1';
import chat2 from './pages/chats/2'

export const allRoutes = [
  {
    path: '/',
    Component: Home
  },
  {
    path: '/profile',
    Component: Profile
  },
  {
    path: `/chat:1`,
    Component: chat1
  },
  {
    path: '/chat:2',
    Component: chat2
  }
]