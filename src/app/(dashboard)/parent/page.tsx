import Announcements from "@/components/Announcements"
import BigCalender from "@/components/BigCalender"

const ParentPage = () => {
    return (
        <div className="flex-1 bg-neutral-200 p-4 flex gap-4 flex-col xl:flex-row">
            {/* esquerda */}
            <div className="min-h-screen w-full xl:w-2/3 bg-white p-4 reounded-md">
                <h1 className="text-xl font-semibold">Agenda (filho)</h1>
                <BigCalender />
            </div>
            {/* direita */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <Announcements />   
            </div>
        </div>
    )
}

export default ParentPage