interface PropType {
    text:string,
    title:string
}

function Info({title, text} : PropType) {
  return (
    <div className="flex mt-3">
        <div className="flex-1 font-bold w-32">
          {title}
        </div>
        <div className="flex-1  w-32">
        {text}
        </div>
    </div>
  );
}

export default Info;
