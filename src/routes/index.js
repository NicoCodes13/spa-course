import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

const routes = {
  '/': Home,
  //: indican que el valor es dinamico
  '/:id': Character,
  '/contact': 'Contact',
};

const router = async () => {
  //tomando los valores del html
  const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');

  //generando el header
  header.innerHTML = await Header();
};

export default router;
