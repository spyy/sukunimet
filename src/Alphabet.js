function Alphabet(props) {
  return (
    <div className="col-4 col-sm-3 col-md-2 col-lg-1">
      <div className="form-check">
        <input id="alphabet" name="alphabet" type="radio" className="form-check-input" checked={props.checked} onChange={() => props.onChecked(props.alphabet)} required="" />
        <label className="form-check-label">{props.alphabet}</label>
      </div>
    </div>
  );
}


export default Alphabet;