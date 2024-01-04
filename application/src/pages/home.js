import React from "react";

function Home() {
  return (
    <div>
      <section id="main-section" className="form form-center round-edges">
        <h1 className="text-center text-green-400">Thang Luong</h1> 
        <div className="divider"></div>
        <p>I am an aspiring Software Engineer dipping my toes into Web Development.</p>
        <ul>
          <li>https://github.com/ThangTLuong</li>
          <li>https://www.linkedin.com/in/thangtluong/</li>
          <li>2023 Graduate</li>
          <ul> 
            <li>3.9/4.0</li>
          </ul>
        </ul>
      </section>
    </div>
  );
}

export default Home;