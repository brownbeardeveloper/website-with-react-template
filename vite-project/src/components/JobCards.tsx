import Card from "./Card";
import HandelsbankenBrand from '../../public/handelsbanken-brand.avif'
import VolvoBrand from '../../public/volvo-brand.avif'
import HusqvarnaBrand from '../../public/husqvarna-brand.jpg'

export default function JobsComponent() {

    const jobs = [
        {
            logo: HandelsbankenBrand,
            title: "Frontend Developer",
            location: "Stockholm, Hybrid"
        },
        {
            logo: HusqvarnaBrand,
            title: "UX Designer",
            location: "Göteborg, Remote"
        },
        {
            logo: VolvoBrand,
            title: "Data Engineer",
            location: "Malmö, Onsite"
        },
    ];

    return (
        <div className="my-20 mx-5">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
                Utforska möjligheter hos toppföretag
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                Se vilka företag som letar efter talanger just nu
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {jobs.map((job, index) => (
                    <Card key={index} {...job} />
                ))}
            </div>
        </div>
    );
}
