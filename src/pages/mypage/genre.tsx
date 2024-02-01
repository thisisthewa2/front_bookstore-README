import { useState } from 'react';
import GenreButton from '@/components/button/genreButton';
import { ReadMeGenreList } from '../api/mock';
import EditToggleButton from '@/components/button/editToggleButton';

export default function Genre() {
  const [isEditMode, setEditMode] = useState(false);
  const genres = ReadMeGenreList.genreList;

  const handleEditModeToggle = () => {
    setEditMode((prev) => !prev);
  };

  const getButtonLayoutClass = () => {
    return 'flex-center flex-wrap pc:w-[1028px] tablet:w-[688px] mobile:w-331 gap-4';
  };

  return (
    <div className="flex-col flex-center mt-40">
      <div className="text-20 font-bold mb-28">선호장르 선택</div>

      <div className={`${getButtonLayoutClass()}`}>
        {genres.map((genre, index) => (
          <GenreButton
            key={index}
            title={genre.title}
            selected={genre.selected}
            editMode={isEditMode}
          />
        ))}
      </div>
      <div className="ml-auto mx-60 mt-80">
        <EditToggleButton
          isEditMode={isEditMode}
          onClick={handleEditModeToggle}
        />
      </div>
    </div>
  );
}
