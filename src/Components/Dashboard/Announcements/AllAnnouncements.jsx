import useAnnouncements from "../../../Hooks/useAnnouncements";
import AnnounceCard from "./AnnounceCard";


const AllAnnouncements = () => {
    const [announcements] = useAnnouncements()
    return (
        <div className="p-6">
            <h2 className="text-3xl mb-6">All Announcements From Owner {announcements.length}</h2>
           
            {
                announcements.map(item => <AnnounceCard key={item._id} item={item}></AnnounceCard>)
            }
            
        </div>
    );
};

export default AllAnnouncements;