import MainLayout from './layouts/MainLayout';
import AboutMe from './pages/about-me/AboutMe';
import Home from './pages/home/Home';
import ProjectDetail from './pages/projects/ProjectDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Projects from './pages/projects/Projects';
import NotFound from './pages/projects/NotFound';

function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path:'/projects/:name',
          element: <ProjectDetail />
        },
        {
          path:'/about-me',
          element: <AboutMe />
        }, 
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
