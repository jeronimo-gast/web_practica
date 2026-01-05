import "./GamesPage.css";
import img1 from "./../../assets/gallery/zelda.jpg";
import img2 from "./../../assets/gallery/clair.jpg";
import img3 from "./../../assets/gallery/darksouls.jpg";
import img4 from "./../../assets/gallery/gow.jpg";
import img5 from "./../../assets/gallery/halo.jpg";
import img6 from "./../../assets/gallery/ffxiv.jpg";
import img7 from "./../../assets/gallery/mario.jpg";
import img8 from "./../../assets/gallery/undertale.jpg";
import img9 from "./../../assets/gallery/tomb.jpg";
import img10 from "./../../assets/gallery/split.jpeg";
import img11 from "./../../assets/gallery/hades.jpg";
import img12 from "./../../assets/gallery/horizon.jpg";
import img13 from "./../../assets/gallery/minecraft.jpg";
import img14 from "./../../assets/gallery/sonic.jpg";
import img15 from "./../../assets/gallery/hollow.jpg";
import img16 from "./../../assets/gallery/gta.jpg";

function GamesPage() {
  return (
    <div className="games-gallery">
      <img src={img1} className="gallery-item tall" />
      <img src={img2} className="gallery-item" />
      <img src={img3} className="gallery-item wide" />
      <img src={img4} className="gallery-item" />

      <img src={img5} className="gallery-item tall" />
      <img src={img6} className="gallery-item" />
      <img src={img7} className="gallery-item wide" />
      <img src={img8} className="gallery-item" />

      <img src={img9} className="gallery-item" />
      <img src={img10} className="gallery-item tall" />
      <img src={img11} className="gallery-item" />
      <img src={img12} className="gallery-item wide" />

      <img src={img13} className="gallery-item" />
      <img src={img14} className="gallery-item tall" />
      <img src={img15} className="gallery-item" />
      <img src={img16} className="gallery-item wide" />
    </div>
  );
}

export default GamesPage;
