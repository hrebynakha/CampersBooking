import css from "./CamperGallery.module.css";

const CamperGallery = ({ gallery, name }) => {
  return (
    <ul className={css.list}>
      {gallery.map((item, i) => {
        return (
          <li className={css.item} key={i}>
            <img src={item.thumb} alt={name} className={css.img} />
          </li>
        );
      })}
    </ul>
  );
};

export default CamperGallery;
