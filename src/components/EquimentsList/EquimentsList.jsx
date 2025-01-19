import EquipmentItem from "../EquipmentItem/EquipmentItem";
import css from "./EquimentsList.module.css";

const EquimentsList = ({ camper }) => {
  return (
    <div className={css.func}>
      {camper.AC && <EquipmentItem name="AC" text="AC" />}
      {camper.bathroom && <EquipmentItem name="bathroom" />}
      {camper.kitchen && <EquipmentItem name="kitchen" />}
      {camper.TV && <EquipmentItem name="TV" text="TV" />}
      {camper.radio && <EquipmentItem name="radio" />}
      {camper.refrigerator && (
        <EquipmentItem name="solar-fridge" text="Refrigerator" />
      )}
      {camper.microwave && <EquipmentItem name="microwave" iconColor="none" />}
      {camper.gas && <EquipmentItem name="gas" iconColor="none" />}
      {camper.water && <EquipmentItem name="water" iconColor="none" />}
    </div>
  );
};

export default EquimentsList;
