import addImg from '/add-round.svg'

export default function Services(props) {
  const makeEachService = props.eachService.map((it) => {
    return (
      <div className="--services-cathegory-container" key={it.id}>
        <img 
        src={addImg}  className="--services-logoImgs" 
        />
        <p className="--services-each-description">{it.description}</p>
      </div>
    );
  });
  return (
    <div className="--services-background-img" id="services">
      <h1 className="--services-main-title">{props.title.toUpperCase()}</h1>
      {makeEachService}
      <p className="--services-final-text">{props.finalText}</p>
     </div>
  );
}
