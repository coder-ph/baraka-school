import Link from 'next/link';

export default function Navlinks() {
  return (
    <div className="hidden lg:flex items-center space-x-8">
      <Link href="/admissions" className="text-black hover:text-blue-600 transition-colors duration-200 font-medium">
        Admissions
      </Link>
      <Link href="/primary" className="text-black hover:text-blue-600 transition-colors duration-200 font-medium">
        Academics
      </Link>
      <Link href="/news" className="text-black hover:text-blue-600 transition-colors duration-200 font-medium">
        News
      </Link>
      {/* <Link href="/contact" className="text-black hover:text-blue-600 transition-colors duration-200 font-medium">
        Contact Info
      </Link> */}
    </div>
  );
}