import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Tawk.to script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/688a5591eb270d19290af5aa/1j1e5sgfu";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div>Hello World Testing</div>;
};

export default App;
