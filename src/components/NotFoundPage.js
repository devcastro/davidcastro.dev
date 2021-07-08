import Steve from "../images/Steve.jpg";

export default function NotFoundPage() {
  return (
    <div
      className="flex justify-center flex-col
    items-center text-center
    h-screen bg-gray-300 "
    >
      <p className="font-bold text-6xl">HALT! 404 - page not found</p>
      <p className="font-bold items-center text-center text-2xl p-20">
        Wanderer, are you lost? This is a construction zone.
      </p>

      <img
        className="
        max-h-96
         rounded-full mb-20 shadow
      "
        src={Steve}
        alt="tired minecraft steve"
      />
    </div>
  );
}
