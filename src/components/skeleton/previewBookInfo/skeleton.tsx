function SkeletonPreviewBookInfo() {
  return (
    <div
      role="card-container"
      className="bg-white max-w-350 h-240 px-40 pt-40 rounded-xl border-2 border-gray-1
        tablet:pt-30 tablet:px-30 tablet:h-220 mobile:w-300 mobile:h-181 mobile:px-20
        mobile:pt-20 flex justify-start items-start gap-20 mobile:gap-10">
      <div
        role="img-section"
        className="relative w-112 h-170 mobile:w-93 bg-gray-1 mobile:h-141 rounded-xl animate-pulse"></div>
      <div className="flex flex-col gap-8 animate-pulse">
        <h1 className="w-140 h-30 bg-gray-1 rounded-xl"></h1>
        <p className="w-80 h-19 bg-gray-1 rounded-xl"></p>
        <p className="w-70 h-20 bg-gray-1 rounded-xl"></p>
        <p className="w-50 h-18 bg-gray-1 rounded-xl"></p>
        <p className="w-60 h-15 bg-gray-1 rounded-xl"></p>
      </div>
    </div>
  );
}

export default SkeletonPreviewBookInfo;
