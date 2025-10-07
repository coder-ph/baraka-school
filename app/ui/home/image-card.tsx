import Image from 'next/image';

export default function ImageCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
      <div className="relative w-full h-full">
        <Image
          src="/im8.jpeg"
          alt="Baraka School"
          fill
          className="object-cover"
          priority
        />
        {/* Optional: Add a subtle overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Optional: Add text overlay if you want text on the image */}
        
      </div>
    </div>
  );
}