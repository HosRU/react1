// import Stamp from "./Stamp";
import Styles from "./ListStamps.module.css";

export default function ListStamps(props) {
//   const stamp = props.stamps.map((e) => {
//     <Stamp
//       key={e.id}
//       id={e.id}
//       name={e.value}
//       description={e.description}
//       status={e.status}
//       delStamp={e.delStamps}
//     />;
//   });

  return (
    <ul className={Styles.list}>
      {props.stamps.map((stamp) => {
        return (
          <li className={Styles.item} key={stamp.id}>
            <div className={Styles.stamp}>
              <div className={Styles.info}>
                <p className={Styles.name}>{stamp.value}, {stamp.id}</p>
                <button type="button" onClick={() => {stamp.delStamps(stamp.id)}}>
                  Удалить
                </button>
              </div>

              <details className={Styles.details}>
                <summary>Показать описание заметки</summary>
                <p className={Styles.description}>{stamp.description}</p>
              </details>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
