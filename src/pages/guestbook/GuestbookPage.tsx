import { useLayoutEffect } from 'react';

export default function GuestbookPage() {
  useLayoutEffect(() => {
    if (import.meta.env.DEV) {
      document.querySelector('body')!.id = 'tt-body-guestbook';
    }
  }, []);

  return (
    <>
      <section>
        <h1 className="text-center font-bold">방명록</h1>
      </section>
      <section className="mx-auto mt-5 max-w-2xl text-center text-xl text-neutral-400">TBD</section>
    </>
  );
}
