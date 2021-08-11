import Steve from "../images/Steve.jpg";

export default function NotFoundPage() {
  return (
    <div
      className="flex justify-center flex-col
    items-center text-center
    h-screen bg-gray-300 "
    >
      <p className="font-bold text-xl sm:text-5xl md:text-6xl relative sm:top-36 md:top-44">HALT! 404 - page not found</p>
      <p className="font-bold items-center text-center text-lg sm:text-2xl p-10 sm:p-32 md:p-44">
        Wanderer, are you lost? This is a construction zone.
      </p>

      <img
        className="
        max-h-72 
         rounded-full mb-20 shadow
      "
        src={Steve}
        alt="tired minecraft steve"
      />
    </div>
  );
}
