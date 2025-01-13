import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./EquimentsList.module.css";

const EquimentsList = ({ camper }) => {
  return (
    <div className={css.func}>
      {camper.AC ? <EquipmentItem name={"ac"} text="AC" /> : null}
      {camper.bathroom ? <EquipmentItem name={"bathroom"} /> : null}
      {camper.kitchen ? (
        <EquipmentItem name={"cup-hot"} text="Kitchen" />
      ) : null}
      {camper.TV ? <EquipmentItem name={"tv"} text="TV" /> : null}
      {camper.radio ? (
        <EquipmentItem name={"ui-radios"} text={"Radio"} />
      ) : null}
      {camper.refrigerator ? (
        <EquipmentItem name={"solar-fridge"} text={"Refrigerator"} />
      ) : null}
      {camper.microwave ? <EquipmentItem name={"microwave"} /> : null}
      {camper.gas ? <EquipmentItem name={"gas"} color="yellow" /> : null}
      {camper.water ? (
        <EquipmentItem name={"ion-water"} text="Water" color="blue" />
      ) : null}
    </div>
  );
};

export default EquimentsList;
