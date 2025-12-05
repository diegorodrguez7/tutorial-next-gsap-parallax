import Parallax from '@/components/Parallax'

function Home() {
  return (
    <>
      <Parallax />
      <div id="about" className="about">
        <h2>Cronica del ilusionista</h2>
        <p>
          David de la Torre desarma la realidad con una mezcla de cartomagia y narrativa: cada baraja que levanta cuenta un secreto y cada dado suspendido en el aire marca el tempo de su siguiente sorpresa. No hay trucos baratos, solo precision y una atmosfera que invita a cruzar al otro lado del telon.
        </p>
        <p id="contact">
          Cuando el telon cae, el eco de la musica y el olor a humo de escenario se quedan en la memoria. Si quieres que tu noche tambien cambie de forma, prepara tus ojos: la proxima ilusion ya esta en marcha.
        </p>
      </div>
      <footer className="site-footer">© 2025 David de la Torre — Ilusion, musica y cartomagia en vivo</footer>
    </>
  )
}

export default Home
