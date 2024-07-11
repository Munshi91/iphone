import Navbar from './components/Navbar';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />

      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
