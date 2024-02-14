import TitleContent from "@/components/card/titleContentCard/titleContent";

interface TitleContentCardProps {
  title: string;
  titleData: string[];
  contentData: string[];
}

function TitleContentCard({ title, titleData, contentData }: TitleContentCardProps) {
  const newData = titleData.map((title, index) => { return { title : title, content: contentData[index] } });
  return (
    <div className="flex flex-col gap-20">
      <span className="text-18 font-bold">{title}</span>
      <div className="flex w-full flex-col gap-22 rounded-[10px] border border-gray-1 p-30">
        {newData.map((data) => (
          <TitleContent title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
}

export default TitleContentCard