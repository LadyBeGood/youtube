type LoadingSpinnerProps = {
    size?: number;
    className?: string;
};

export default function LoadingSpinner({ size = 40, className = ""}: LoadingSpinnerProps) {
    return (
        <div className={`grid h-full w-full place-items-center ${className}`}>
            <div
                className="spinner"
                style={{ width: size, height: size }}
            />
        </div>
    );
}