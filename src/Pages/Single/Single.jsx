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
              <img src="" alt="" className="itemImg" />
              <div className="details">
                <h1 className="title">Ruggero Moscato</h1>
                <div className="detailItem"></div>
                <span className="itemKey">Email:</span>
                <span className="itemValue">Ruggeromoscato04@gmail.com</span>
                <div className="detailItem"></div>
                <span className="itemKey">Telefono:</span>
                <span className="itemValue">3505235024</span>
                <div className="detailItem"></div>
                <span className="itemKey">Indirizzo:</span>
                <span className="itemValue">Via Trabucco 192A</span>
                <div className="detailItem"></div>
                <span className="itemKey">Stato:</span>
                <span className="itemValue">Italia</span>
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
        <div className="bottom"></div>
        <h1 className="title">Ultime transazioni</h1>
        <List/>
      </div>
    </div>
  );
};

export default Single;
