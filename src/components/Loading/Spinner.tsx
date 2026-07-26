type LoadingSpinnerProps = {
    size?: number;
    className?: string;
};

export default function LoadingSpinner({ size = 40, className = ""}: LoadingSpinnerProps) {
    return (
        <div className={`grid h-svh w-screen place-items-center ${className}`}>
            <div
                className="animate-spin rounded-full border-4 border-transparent border-t-white border-l-white border-r-white"
                style={{ width: size, height: size }}
            />
        </div>
    );
}