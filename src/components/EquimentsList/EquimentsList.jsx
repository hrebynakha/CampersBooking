import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./EquimentsList.module.css";

const EquimentsList = ({ camper }) => {
  return (
    <div className={css.func}>
      {camper.AC ? <EquipmentItem name="AC" text="AC" /> : null}
      {camper.bathroom ? <EquipmentItem name="bathroom" /> : null}
      {camper.kitchen ? <EquipmentItem name="kitchen" text="Kitchen" /> : null}
      {camper.TV ? <EquipmentItem name="TV" text="TV" /> : null}
      {camper.radio ? <EquipmentItem name="radio" text={"Radio"} /> : null}
      {camper.refrigerator ? (
        <EquipmentItem name="solar-fridge" text="Refrigerator" />
      ) : null}
      {camper.microwave ? (
        <EquipmentItem name="microwave" iconColor="none" />
      ) : null}
      {camper.gas ? <EquipmentItem name="gas" iconColor="none" /> : null}
      {camper.water ? <EquipmentItem name="water" iconColor="none" /> : null}
    </div>
  );
};

export default EquimentsList;
