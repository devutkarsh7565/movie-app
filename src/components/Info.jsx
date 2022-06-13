const Info = (props) => {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl">{props.infoNames}</h1>
        <div className="font-normal text-lg">
          <h1>{props.director}</h1>
        </div>
      </div>
    </>
  );
};

export default Info;
