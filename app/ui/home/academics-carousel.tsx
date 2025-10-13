import Image from 'next/image';

export default function AcademicsCarousel() {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
      {/* Single Static Image */}
      <div className="relative w-full h-full">
        <Image
          src="/lab3.jpg"
          alt="Baraka Mtito Academy Laboratory"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}