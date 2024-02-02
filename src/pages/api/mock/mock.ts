export interface HeaderProps {
  isLoggedIn: boolean;
  numItemsOfCart?: number;
}

export interface GenreProps {
  title: string;
  selected: boolean;
}

export interface GenreList {
  genreList: GenreProps[];
}

export interface CategoryProps {
  title: string;
  link: string;
  categoryType?: string;
}

export interface CategoryList {
  categoryList: CategoryProps[];
}

const createReadMeGenre = (
  title: string,
  selected: boolean = false,
): GenreProps => ({ title, selected });

export const ReadMeGenreList: GenreList = {
  genreList: [
    createReadMeGenre('건강/취미'),
    createReadMeGenre('만화'),
    createReadMeGenre('고전'),
    createReadMeGenre('공무원 수험서'),
    createReadMeGenre('과학'),
    createReadMeGenre('유아'),
    createReadMeGenre('어린이'),
    createReadMeGenre('청소년'),
    createReadMeGenre('대학교재/전문서적'),
    createReadMeGenre('만화'),
    createReadMeGenre('사회과학'),
    createReadMeGenre('수험서/자격증'),
    createReadMeGenre('소설/시/희곡', true),
    createReadMeGenre('에세이'),
    createReadMeGenre('여행', true),
    createReadMeGenre('역사'),
    createReadMeGenre('경제경영'),
    createReadMeGenre('예술/대중문화'),
    createReadMeGenre('요리/살림'),
    createReadMeGenre('외국어'),
    createReadMeGenre('인문학'),
    createReadMeGenre('자기계발'),
    createReadMeGenre('장르소설'),
    createReadMeGenre('잡지'),
    createReadMeGenre('전집'),
    createReadMeGenre('종교/역학'),
    createReadMeGenre('좋은 부모'),
    createReadMeGenre('컴퓨터/모바일'),
    createReadMeGenre('초등학교참고서'),
    createReadMeGenre('중학교참고서'),
    createReadMeGenre('고등학교참고서'),
  ],
};

const createCategory = (title: string, link: string): CategoryProps => ({
  title,
  link: link,
  categoryType: '/domestic',
});

const createForeignCategory = (title: string, link: string): CategoryProps => ({
  title,
  link: link,
  categoryType: '/foreign',
});

export const ReadMeForeignCategoryList: CategoryList = {
  categoryList: [
    createForeignCategory('가정/원예', '/homeGardening'),
    createForeignCategory('가족/관계', '/familyRelationship'),
    createForeignCategory('건강/스포츠', '/healthSports'),
    createForeignCategory('건축/디자인', '/architectureDesign'),
    createForeignCategory('경제경영', '/economicsBusiness'),
    createForeignCategory('공예/취미/수집', '/craft'),
    createForeignCategory('교육/자료', '/education'),
    createForeignCategory('기술공학', '/technology'),
    createForeignCategory('만화', '/comics'),
    createForeignCategory('법률', '/law'),
    createForeignCategory('소설/시/희곡', '/literature'),
    createForeignCategory('수험서', '/textbook'),
    createForeignCategory('어린이', '/child'),
    createForeignCategory('언어학', '/linguistics'),
    createForeignCategory('에세이', '/essay'),
    createForeignCategory('여행', '/travel'),
    createForeignCategory('역사', '/history'),
    createForeignCategory('예술/대중문화', '/art'),
    createForeignCategory('요리', '/cooking'),
    createForeignCategory('의학', '/medicine'),
    createForeignCategory('인문/사회', '/social'),
    createForeignCategory('자기계발', '/selfDevelopment'),
    createForeignCategory('과학/수학', '/science'),
    createForeignCategory('전기/자서전', '/biography'),
    createForeignCategory('종교/명상/점술', '/religion'),
    createForeignCategory('청소년', '/teenager'),
    createForeignCategory('컴퓨터', '/computer'),
    createForeignCategory('해외잡지', '/magazine'),
    createForeignCategory('ELT/어학/사전', '/ELT'),
    createForeignCategory('일본도서', '/japan'),
    createForeignCategory('중국도서', '/china'),
    createForeignCategory('독일도서', '/germany'),
    createForeignCategory('스페인도서', '/spain'),
    createForeignCategory('한국관련도서', '/korea'),
  ],
};

export const ReadMeDomesticCategoryList: CategoryList = {
  categoryList: [
    createCategory('건강취미', '/healthHobby'),
    createCategory('경제경영', '/economicsBusiness'),
    createCategory('고전', '/classic'),
    createCategory('공무원 수험서', '/civilServantExam'),
    createCategory('과학', '/science'),
    createCategory('대학교재', '/universityTextbooks'),
    createCategory('만화', '/comics'),
    createCategory('사회과학', '/socialScience'),
    createCategory('수험서/자격증', '/certificate'),
    createCategory('소설/시/희곡', '/literature'),
    createCategory('어린이', '/child'),
    createCategory('에세이', '/essay'),
    createCategory('여행', '/travel'),
    createCategory('역사', '/history'),
    createCategory('예술/대중문화', '/art'),
    createCategory('요리/살림', '/cooking'),
    createCategory('외국어', '/foreignLanguage'),
    createCategory('유아', '/infant'),
    createCategory('인문학', '/humanities'),
    createCategory('자기계발', '/selfDevelopment'),
    createCategory('장르소설', '/genreNovel'),
    createCategory('잡지', '/magazine'),
    createCategory('전집', '/fullCollection'),
    createCategory('종교/역학', '/religion'),
    createCategory('좋은 부모', '/parenting'),
    createCategory('청소년', '/teenager'),
    createCategory('컴퓨터/모바일', '/computer'),
    createCategory('초등학교참고서', '/elementarySchoolWorkBook'),
    createCategory('중학교참고서', '/middleSchoolWorkBook'),
    createCategory('고등학교참고서', '/highSchoolWorkBook'),
  ],
};
