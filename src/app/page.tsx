import Image from "next/image";
import banner from '../../public/paint-bsas.png'
import buzo from '../../public/buzo.png'
import reme1 from '../../public/reme1.png'
import show1 from '../../public/1show.jpg'

export default function Home() {
  return (
    <div className="pagina">

      <div className="banner">

        <div className="sidebar">
          <h1>B$A$TRAP</h1>
          <span>Log In</span>
        </div>

        <div className="main">
          <div className="main-span">
            <span className="fecha-lugar">7 y 8 de Diciembre|</span>
            <span className="fecha-lugar">Parque de la Ciudad</span>
          </div>

          <Image
            alt="abc"
            src={banner}
            className="imagen-portada">
          </Image>
        </div>

      </div>
      {/* cierre del banner */}

      <div className="shows">
        <h4>SHOWS</h4>

        <div className="contain-show">
          <div className="hover">
            <Image alt="show duki" src={show1} width={82} className="imagen-show"></Image>
            <p className="numero-dia">4</p>
            <div className="dia-mes">
              <p>Sab</p>
              <p>Dic</p>
            </div>
            <span className="place-lugar">Monumental</span>
          </div>
          <button className="buy-button">Buy Tickets</button>          
        </div>

        <div className="contain-show">
          <div className="hover">
            <Image alt="show duki" src={show1} width={82} className="imagen-show"></Image>
            <p className="numero-dia">4</p>
            <div className="dia-mes">
              <p>Sab</p>
              <p>Dic</p>
            </div>
            <span className="place-lugar">Monumental</span>
          </div>
          <button className="buy-button">Buy Tickets</button>          
        </div>

        <div className="contain-show">
          <div className="hover">
            <Image alt="show duki" src={show1} width={82} className="imagen-show"></Image>
            <p className="numero-dia">4</p>
            <div className="dia-mes">
              <p>Sab</p>
              <p>Dic</p>
            </div>
            <span className="place-lugar">Monumental</span>
          </div>
          <button className="buy-button">Buy Tickets</button>          
        </div>

        <div className="contain-show">
          <div className="hover">
            <Image alt="show duki" src={show1} width={82} className="imagen-show"></Image>
            <p className="numero-dia">4</p>
            <div className="dia-mes">
              <p>Sab</p>
              <p>Dic</p>
            </div>
            <span className="place-lugar">Monumental</span>
          </div>
          <button className="buy-button">Buy Tickets</button>          
        </div>

        <div className="contain-show">
          <div className="hover">
            <Image alt="show duki" src={show1} width={82} className="imagen-show"></Image>
            <p className="numero-dia">4</p>
            <div className="dia-mes">
              <p>Sab</p>
              <p>Dic</p>
            </div>
            <span className="place-lugar">Monumental</span>
          </div>
          <button className="buy-button">Buy Tickets</button>          
        </div>

      </div>

      <div className="merch">

        <div className="one">
          <h2>Merch</h2>
          <p>Toda la indumentaria del BSAS Trap</p>
          <button className="get-merch">Get Merch</button>
        </div>

        <div className="two">
            <div className="container-merch-color">
                <Image
                alt="buzo"
                src={buzo}></Image>
            </div>
            <div className="buzos">
              <h2>BUZOS</h2>
            </div>
        </div>

        <div className="three">
            <div className="container-merch-color">
                <Image
                alt="buzo"
                src={reme1}></Image>
            </div>
            <div className="buzos">
              <h2>REMERAS</h2>
            </div>
            
        </div>

        <div className="four">
            <div className="container-merch-color">
                <Image
                alt="buzo"
                src={buzo}></Image>
            </div>
        </div>
      

      </div>

      <div className="pre-footer">
        <h3>Activa las notificaciones en Twitter e Instagram</h3>
        <p>Playlist de Spotify</p>
      </div>

      <div className="footer">
          <p>© 2024 BY JOACO. CREATED ON NextJS.</p>
          <p>TERMINOS Y CONDICIONES</p>
          <p>ENVIOS Y DEVOLUCIONES</p>
          <p>PREGUNTAS FRECUENTES</p>
      </div>

    </div>
  );
}
