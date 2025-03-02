import aroundusImage from '@/shared/assets/images/aroundus.png';

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 border-t border-t-gray-300 p-6 text-center text-sm text-neutral-300">
      <span>Design by</span>
      <a href="https://aroundus.github.io">
        <img
          src={aroundusImage}
          width={100}
        />
      </a>
    </footer>
  );
}
