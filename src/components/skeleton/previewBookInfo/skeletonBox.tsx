import SkeletonPreviewBookInfo from './skeleton';

function SkeletonBoxPreviewBookInfo() {
  return (
    <div
      role="container"
      className={`relative flex flex-col justify-start items-center overflow-hidden
        ${STYLE.container}`}>
      <div
        role="colored-background"
        className={`bg-gray-1 flex-center ${STYLE['colored-background']}`}>
        <h1 role="title" className={`absolute font-bold ${STYLE.title}`}>
          실시간 인기 도서
        </h1>
      </div>
      <div
        role="card-section"
        className={`grid grid-rows-2 grid-flow-col absolute gap-20 tablet:grid-rows-3
          ${STYLE['card-section']}`}>
        {[0, 1, 2, 3, 4, 5].map((key) => {
          return (
            <div
              key={key}
              className={`${key === 2 || key === 3 ? `relative top-40` : ``} tablet:static mobile:static`}>
              <SkeletonPreviewBookInfo />
            </div>
          );
        })}
      </div>
    </div>
  );
}
