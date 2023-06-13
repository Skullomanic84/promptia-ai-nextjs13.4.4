import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts"
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* handles main background color */}
          <div className="main">
            <div className="gradient"></div>
          </div>
          {/* children rendered */}
          <main className="app">
            {/* navigation */}
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;