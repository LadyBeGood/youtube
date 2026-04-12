

function PlaylistCard({ title, count, totalDuration, updatedAt, description }) {
    return (
        <div>

        </div>
    );
}

export default function Playlists() {
    const lists = [
        { title: "Electromagnetism Series", count: 18, totalDuration: "6h 42m", updatedAt: "3 weeks ago", description: "From Coulomb's law to Maxwell's equations — the complete arc." },
        { title: "Chemistry Fundamentals", count: 9, totalDuration: "3h 18m", updatedAt: "2 months ago", description: "Atoms, bonds, and reactions — no prior knowledge needed." },
        { title: "Physics Shorts", count: 31, totalDuration: "4h 10m", updatedAt: "1 week ago", description: "Bite-sized concepts, each under 10 minutes." },
        { title: "Experiments at Home", count: 14, totalDuration: "5h 02m", updatedAt: "5 months ago", description: "Real experiments you can replicate with household items." },
    ];

    return (
        <div className="pb-10">
            {lists.map((pl) => <PlaylistCard key={pl.title} {...pl} />)}
        </div>
    );
}
