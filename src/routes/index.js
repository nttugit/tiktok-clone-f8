// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// Không cần đăng nhập
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following, layout: null }, // null for test
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
