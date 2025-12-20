import Header from "./components/header";

const Home = () => {
  return (
    <div>
      <header className="p-1 h-20 bg-[#0b0f19]">
        {/* <h4 className="text-white">Plataforma - Chácara Moura</h4> */}
        <img src="/logo-menor.png" alt="" className="w-16" />
      </header>
      <Header />
    </div>
  );
};

export default Home;
