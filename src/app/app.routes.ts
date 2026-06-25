import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Aviso } from './pages/legal/aviso/aviso';
import { Condiciones } from './pages/legal/condiciones/condiciones';
import { Politicaprivacidad } from './pages/legal/politicaprivacidad/politicaprivacidad';
import { Cookies } from './pages/legal/cookies/cookies';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'nosotros',
    component: About,
  },
  {
    path: 'contacto',
    component: Contact,
  },
  {
    path: 'productos',
    component: Products,
  },
  {
    path: 'productos/:id',
    component: ProductDetail,
  },
  {
    path: 'legal/aviso-legal',
    component: Aviso,
  },
  {
    path: 'legal/condiciones',
    component: Condiciones,
  },
  {
    path: 'legal/privacidad',
    component: Politicaprivacidad,
  },
  {
    path: 'legal/cookies',
    component: Cookies,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
