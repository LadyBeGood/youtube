
function LessonDot({ num, state, label }) {
    return (
        <div className="flex-shrink-0 w-11 text-center">
            <div className={`w-7 h-7 rounded-full border flex items-center justify-center mx-auto mb-1 text-[10px] font-medium
                ${state === "done" ? "border-white/30 text-white/50" :
                    state === "active" ? "border-white   text-white" :
                        "border-white/10 text-white/20"}`}>
                {state === "done" ? "✓" : num}
            </div>
            <div className="text-[9px] text-white/25 truncate">{label}</div>
        </div>
    );
}


function CourseCard({ title, lessons, duration, level, progress, lessonList }) {
    const completedCount = Math.round((progress / 100) * lessons);

    return (
        <div className="border-b border-white/10 cursor-pointer active:bg-white/5">
            {/* Thumbnail */}
            <div className="relative w-full aspect-video bg-[#111] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                {/* Level — top-left sharp tag */}
                <span className="absolute top-0 left-0 text-[9px] font-medium text-white/40 border-r border-b border-white/10 px-2 py-1 uppercase tracking-widest">
                    {level}
                </span>
                {/* Progress bar */}
                {progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
                        <div className="h-full bg-white" style={{ width: `${progress}%`, opacity: progress === 100 ? 0.25 : 0.6 }} />
                    </div>
                )}
            </div>

            {/* Meta */}
            <div className="px-4 py-3">
                <p className="text-[13px] font-medium text-white mb-1">{title}</p>
                <p className="text-[11px] text-white/35">{lessons} lessons · {duration}</p>

                {/* Progress row */}
                <div className="mt-3">
                    <div className="flex justify-between mb-1.5">
                        <span className="text-[11px] text-white/30">
                            {progress === 0 ? "Not started" :
                                progress === 100 ? "Completed" :
                                    `${completedCount} of ${lessons} done`}
                        </span>
                        <span className={`text-[11px] font-medium ${progress === 0 ? "text-white/15" : "text-white/50"}`}>
                            {progress}%
                        </span>
                    </div>
                    {/* Track */}
                    <div className="h-px bg-white/10">
                        <div className="h-full bg-white/60" style={{ width: `${progress}%` }} />
                    </div>
                </div>

                {/* Lesson dots — only when in progress */}
                {progress > 0 && progress < 100 && lessonList && (
                    <div className="flex gap-0 mt-4 pt-3 border-t border-white/[0.06] overflow-x-auto no-scrollbar">
                        {lessonList.map((l, i) => (
                            <LessonDot
                                key={l} num={i + 1} label={l}
                                state={i < completedCount ? "done" : i === completedCount ? "active" : "locked"}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Courses() {
    const courses = [
        {
            title: "Advanced Circuit Theory", lessons: 8, duration: "3h 05m", level: "Advanced", progress: 60,
            lessonList: ["Intro", "Ohm's Law", "RC Circuits", "Impedance", "AC Theory", "Filters", "Resonance", "Final"],
        },
        {
            title: "Electromagnetism from Zero", lessons: 12, duration: "4h 20m", level: "Beginner", progress: 0,
            lessonList: null,
        },
        {
            title: "Chemistry of Energy Storage", lessons: 10, duration: "3h 50m", level: "Intermediate", progress: 30,
            lessonList: ["Intro", "Redox", "Electrodes", "Electrolytes", "Cell Design", "Charging", "Dendrites", "BMS", "Safety", "Future"],
        },
        {
            title: "Light, Waves & Optics", lessons: 6, duration: "2h 10m", level: "Beginner", progress: 100,
            lessonList: null,
        },
    ];

    return (
        <div className="pb-10">
            {courses.map((c) => <CourseCard key={c.title} {...c} />)}
        </div>
    );
}


