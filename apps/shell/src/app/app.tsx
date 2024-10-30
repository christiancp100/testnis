import { Title } from '@mf-poc/ui';
import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import { DashboardSidebar } from '../components/sidebar';

const About = React.lazy(() => import('about/Module'));

const Shop = React.lazy(() => import('shop/Module'));

const Cart = React.lazy(() => import('cart/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <DashboardSidebar>
        <Routes>
          <Route path="/" element={<Title>Shell</Title>} />
          <Route path="/about" element={<About />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </DashboardSidebar>
    </React.Suspense>
  );
}

export default App;
