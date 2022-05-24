import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useRouter } from "next/dist/client/router"
import { format } from "date-fns";

function Search() {
    const router = useRouter();

    const{location, startDate, endDate, noOfGuest}= router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM  yy");
    const formattedEndtDate = format(new Date(endDate), "dd MMMM  yy");
    const range = `${formattedStartDate} to ${formattedEndtDate}`; 
    return (
        <div>
            <Header plceholder={`${location} | ${range} | ${noOfGuest} guests`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6" >
                    <p className="text-xs">300+ Stays -{range} - For {noOfGuest} Guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancelation Flexibility</p>
                        <p className="button">Type Of Places</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                </section>

            </main>
            <Footer/>
        </div>
    )
}

export default Search
