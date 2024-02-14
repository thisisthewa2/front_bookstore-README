interface TitleContentProps {
  title: string;
  content: string;
}

function TitleContent({title, content} : TitleContentProps) {
  return (
    <div className="flex gap-30 w-full text-16">
      <span className="text-gray-2 w-63">{title}</span>
      <span className="text-black">{content}</span>
    </div>
  );
}

export default TitleContent