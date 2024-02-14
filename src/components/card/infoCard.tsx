interface InfoCard {
  title: string;
  content: string;
}

function InfoCard({ title, content } : InfoCard) {
  return (
    <div className="flex-center w-full flex-col gap-8 py-40 bg-gray-5 text-20 font-bold">
      {title}
      <span className="text-16 text-gray-2">{content}</span>
    </div>
  );

}

export default InfoCard