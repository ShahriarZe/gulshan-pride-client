import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const Announcements = () => {
    const axiosPublic = useAxiosPublic()
    const handleAnnouncement = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const details = form.details.value
        const announce = { title, details }
        console.log(announce)
        axiosPublic.post('/announcements', announce)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Announcement has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    e.target.reset()
                }
            })
    }
    return (
        <div>
            <h2 className="mt-6 text-3xl mx-4">Make Announcement :</h2>
            <form onSubmit={handleAnnouncement} className="card-body">
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <span className="label-text">Announcement Details</span>
                    <textarea className="textarea textarea-bordered h-24" name="details" placeholder="Details"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-outline text-red-700" type="submit" value="Make Announcement" />
                </div>
            </form>
        </div>
    );
};

export default Announcements;