const BoxColor = ({ color, inputValue }) => {
  return (
    <div  className="box" style={{border: `solid 2px ${color}`, color: `${color}`, padding: '20px'}}>
      <p>{inputValue === color ? `I'm ${color}` : 'I`m not the color'}</p>
    </div>
  );
};

export default BoxColor;
