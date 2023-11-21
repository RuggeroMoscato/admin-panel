import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../Components/Widget/widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Ultimi 6 mesi (Guadagno)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Ultime transazioni</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;