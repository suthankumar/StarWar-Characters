import GetData from "./GetData";
interface PropType {
  Title: string;
  details: any;
  keyName?: string;
}

function InfoBubble({ details, Title, keyName = "name" }: PropType) {
  return (
    <>
      <div className="mt-3 font-bold w-32"> {Title}</div>
      <div className="pt-4 flex justify-start flex-wrap">
        {details.length ? (
          details.map((starSp: any, i: number) => {
            return (
              <span
                key={i}
                className="inline-block bg-gray-50 rounded-full px-3 py-1 text-sm text-gray-700 mr-2"
              >
                <GetData keyName={keyName} url={starSp} />
              </span>
            );
          })
        ) : (
          <div>No {Title} avaliable</div>
        )}
      </div>
    </>
  );
}

export default InfoBubble;
