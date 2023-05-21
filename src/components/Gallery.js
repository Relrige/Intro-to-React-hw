export function Galerry(props) {
  return (
    <div className="Galerry">
      <img src={props.image} alt={props.name}></img>
      <p> {props.name}</p>
      <p> {props.description}</p>
    </div>
  );
}
