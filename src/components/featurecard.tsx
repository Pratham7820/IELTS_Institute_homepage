export default function Featurecard({ logo, title, description }:{logo:string,title:string,description:string}) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition rounded-2xl p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{logo}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  )
}
