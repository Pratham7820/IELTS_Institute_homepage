export default function Reviewcard({ review, name }: { review: string, name: string }) {
    return (
        <div className="bg-white shadow-lg hover:shadow-xl p-6 rounded-xl max-w-sm">
            <p className="text-gray-600 mb-4">
                {review}
            </p>
            <h4 className="font-semibold">- {name}</h4>
        </div>
    )
}