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

export const communityCards = [
  {
    id: 1,
    profileImg: 'https://picsum.photos/id/10/200/300',
    userNickname: '리드미',
    createAt: '2024.01.31',
    bookCover: 'https://picsum.photos/id/11/200/300',
    bookTitle: '푸바오, 언제나 사랑해',
    review: '마음을 울리는 따뜻한 이야기.',
  },
  {
    id: 2,
    profileImg: 'https://picsum.photos/id/20/200/300',
    userNickname: '책읽는고양이',
    createAt: '2024.01.30',
    bookCover: 'https://picsum.photos/id/21/200/300',
    bookTitle: '별의 카르테',
    review: '밤하늘의 별처럼 반짝이는 이야기.',
  },
  {
    id: 3,
    profileImg: 'https://picsum.photos/id/30/200/300',
    userNickname: '페이지터너',
    createAt: '2024.01.29',
    bookCover: 'https://picsum.photos/id/31/200/300',
    bookTitle: '시간을 담은 집',
    review: '시간이 멈춘 듯한 마법의 순간들.',
  },
  {
    id: 4,
    profileImg: 'https://picsum.photos/id/40/200/300',
    userNickname: '서점나그네',
    createAt: '2024.01.28',
    bookCover: 'https://picsum.photos/id/41/200/300',
    bookTitle: '그림자의 노래',
    review: '그림자처럼 조용히 마음에 스며드는 이야기.',
  },
  {
    id: 5,
    profileImg: 'https://picsum.photos/id/50/200/300',
    userNickname: '도서관쥐',
    createAt: '2024.01.27',
    bookCover: 'https://picsum.photos/id/51/200/300',
    bookTitle: '해변의 카프카',
    review: '무거운 주제를 가볍게 풀어내는 마법.',
  },
  {
    id: 6,
    profileImg: 'https://picsum.photos/id/60/200/300',
    userNickname: '북웜',
    createAt: '2024.01.26',
    bookCover: 'https://picsum.photos/id/61/200/300',
    bookTitle: '우리들의 일그러진 영웅',
    review: '인간 내면의 깊이를 탐구하는 소설.',
  },
  {
    id: 7,
    profileImg: 'https://picsum.photos/id/70/200/300',
    userNickname: '문학소녀',
    createAt: '2024.01.25',
    bookCover: 'https://picsum.photos/id/71/200/300',
    bookTitle: '빛의 제국',
    review: '어둠 속에서도 빛을 찾아내는 이야기.',
  },
  {
    id: 8,
    profileImg: 'https://picsum.photos/id/80/200/300',
    userNickname: '책벌레',
    createAt: '2024.01.24',
    bookCover: 'https://picsum.photos/id/81/200/300',
    bookTitle: '종이 여자',
    review: '종이처럼 얇은 인생이 주는 깊은 울림.',
  },
  {
    id: 9,
    profileImg: 'https://picsum.photos/id/90/200/300',
    userNickname: '읽는토끼',
    createAt: '2024.01.23',
    bookCover: 'https://picsum.photos/id/91/200/300',
    bookTitle: '꿈의 해석',
    review: '꿈을 통해 자신을 이해하는 여정.',
  },
  {
    id: 10,
    profileImg: 'https://picsum.photos/id/100/200/300',
    userNickname: '노을사랑',
    createAt: '2024.01.22',
    bookCover: 'https://picsum.photos/id/101/200/300',
    bookTitle: '마법의 섬',
    review: '상상력을 자극하는 판타지 여행.',
  },
  {
    id: 11,
    profileImg: 'https://picsum.photos/id/110/200/300',
    userNickname: '별바라기',
    createAt: '2024.01.21',
    bookCover: 'https://picsum.photos/id/111/200/300',
    bookTitle: '숲속의 비밀',
    review: '자연과 하나되는 신비로운 경험.',
  },
  {
    id: 12,
    profileImg: 'https://picsum.photos/id/120/200/300',
    userNickname: '바람돌이',
    createAt: '2024.01.20',
    bookCover: 'https://picsum.photos/id/121/200/300',
    bookTitle: '시간 여행자',
    review: '시간을 넘나드는 아슬아슬한 모험.',
  },
  {
    id: 13,
    profileImg: 'https://picsum.photos/id/130/200/300',
    userNickname: '하늘소리',
    createAt: '2024.01.19',
    bookCover: 'https://picsum.photos/id/131/200/300',
    bookTitle: '감정의 색',
    review: '감정이 색으로 표현될 때 생기는 이야기.',
  },
  {
    id: 14,
    profileImg: 'https://picsum.photos/id/140/200/300',
    userNickname: '물결무늬',
    createAt: '2024.01.18',
    bookCover: 'https://picsum.photos/id/141/200/300',
    bookTitle: '거울 속으로',
    review: '거울이 우리에게 보여주는 또 다른 세계.',
  },
  {
    id: 15,
    profileImg: 'https://picsum.photos/id/152/200/300',
    userNickname: '모래알',
    createAt: '2024.01.17',
    bookCover: 'https://picsum.photos/id/151/200/300',
    bookTitle: '시간의 모래',
    review: '모래알처럼 흘러가는 시간 속 사랑 이야기.',
  },
  {
    id: 16,
    profileImg: 'https://picsum.photos/id/160/200/300',
    userNickname: '별빛조각',
    createAt: '2024.01.16',
    bookCover: 'https://picsum.photos/id/161/200/300',
    bookTitle: '우주의 끝',
    review: '무한한 우주를 여행하며 찾은 소중한 진실.',
  },
  {
    id: 17,
    profileImg: 'https://picsum.photos/id/170/200/300',
    userNickname: '파도소리',
    createAt: '2024.01.15',
    bookCover: 'https://picsum.photos/id/171/200/300',
    bookTitle: '바다의 속삭임',
    review: '바다가 들려주는 잔잔한 이야기들.',
  },
  {
    id: 18,
    profileImg: 'https://picsum.photos/id/180/200/300',
    userNickname: '책갈피',
    createAt: '2024.01.14',
    bookCover: 'https://picsum.photos/id/181/200/300',
    bookTitle: '잃어버린 시간을 찾아서',
    review: '잊혀진 시간 속에서 찾은 소중한 기억.',
  },
  {
    id: 19,
    profileImg: 'https://picsum.photos/id/190/200/300',
    userNickname: '꿈꾸는자',
    createAt: '2024.01.13',
    bookCover: 'https://picsum.photos/id/191/200/300',
    bookTitle: '꿈의 집',
    review: '꿈과 현실이 교차하는 신비로운 경험.',
  },
  {
    id: 20,
    profileImg: 'https://picsum.photos/id/200/200/300',
    userNickname: '빛나는밤',
    createAt: '2024.01.12',
    bookCover: 'https://picsum.photos/id/201/200/300',
    bookTitle: '별이 빛나는 밤에',
    review: '별빛 아래에서 펼쳐지는 감성적인 이야기.',
  },
];

export const myCommunityCard = [
  {
    id: 1,
    profileImg: 'https://picsum.photos/200/300?random=1',
    userNickname: '할로봉쥬',
    createAt: '2024.01.31',
    bookCover: 'https://picsum.photos/100/150?random=11',
    bookTitle: '숲 속의 비밀',
    review: '이 책은 숲 속에 숨겨진 비밀을 찾아가는 모험을 그리고 있습니다. 자연의 아름다움과 함께하는 여정을 느낄 수 있어요.',
  },
  {
    id: 2,
    profileImg: 'https://picsum.photos/200/300?random=2',
    userNickname: '할로봉쥬',
    createAt: '2024.01.31',
    bookCover: 'https://picsum.photos/100/150?random=12',
    bookTitle: '시간의 강',
    review: '시간을 통해 우리가 겪는 변화와 성장에 대한 이야기입니다. 인생의 소중한 순간들을 되돌아보게 하는 깊은 메시지가 담겨 있어요.',
  },
  {
    id: 3,
    profileImg: 'https://picsum.photos/200/300?random=3',
    userNickname: '할로봉쥬',
    createAt: '2024.01.31',
    bookCover: 'https://picsum.photos/100/150?random=13',
    bookTitle: '빛나는 별의 노래',
    review: '우주와 별을 테마로 한 이야기로, 꿈과 희망에 관한 이야기를 담고 있습니다. 마음을 울리는 따뜻한 이야기가 가득해요.',
  },
  {
    id: 4,
    profileImg: 'https://picsum.photos/200/300?random=4',
    userNickname: '할로봉쥬',
    createAt: '2024.01.31',
    bookCover: 'https://picsum.photos/100/150?random=14',
    bookTitle: '그림자를 걷는 사람',
    review: '자신의 그림자와 마주하는 과정을 통해 자아를 발견해가는 여정을 그립니다. 자기 발견과 성찰에 관한 이야기에 깊이 몰입하게 됩니다.',
  },
  {
    id: 5,
    profileImg: 'https://picsum.photos/200/300?random=5',
    userNickname: '할로봉쥬',
    createAt: '2024.01.31',
    bookCover: 'https://picsum.photos/100/150?random=15',
    bookTitle: '마음의 문을 열다',
    review: '마음의 문을 열고 진정한 자신을 마주하는 과정에 대한 이야기입니다. 삶의 진정한 의미를 찾아가는 여정을 담고 있어요.',
  },
];
