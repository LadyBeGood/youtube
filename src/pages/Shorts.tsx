import Short from "../components/Players/ShortPlayer";

/**
 * This component use CSS's inbuilt scroll snapping feature for snapping. CSS's scroll snap's duration or 
 * timing function is not customisable and depends entirely on the browser and OS maybe, but I
 * still use it instead of rolling out my own because I am, well, lazy. For now atleast.
 */
export default function Shorts() {
    return (
        <main className="overflow-auto no-scrollbar snap-y snap-mandatory">
            <Short />
            <Short />
            <Short />
            <Short />
            <Short />
            <Short />
            <Short />
            <Short />
        </main>
    )
}