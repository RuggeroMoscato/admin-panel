import "./Single.scss";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import Chart from "../../Components/Chart";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Informazioni</h1>
            <div className="item">
              <img
                src="c:\Users\rugge\OneDrive\Documents\immagine ruggero.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="title">Ruggero Moscato</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Ruggeromoscato04@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefono:</span>
                  <span className="itemValue">+39 350 523 5024</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Indirizzo:</span>
                  <span className="itemValue">Via Trabucco 192A</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stato:</span>
                  <span className="itemValue">Italia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 1}
              title="Spese dell' utente nelgli ultimi 6 mesi"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Ultime transazioni</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
