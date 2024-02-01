import Header from '@/components/header';

export default function Community() {
  return (
    <div>
      <Header isLoggedIn={false} />
      <Header isLoggedIn={true} numItemsOfCart={4} />
    </div>
  );
}
