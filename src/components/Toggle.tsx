

const Toggle = ({ isToggled = true }) => {

    return (
        <div 
            className="bg-cool-gray pointer-events-none h-6 w-10 p-1 rounded-full cursor-pointer transition-colors duration-100"
            style={isToggled ? { backgroundColor: "white" } : {}}
        >
            <div 
                className="h-full aspect-square bg-dark-gray rounded-full transition-transform duration-100"
                style={isToggled ? { transform: "translateX(16px)" } : { transform: "translateX(0px)" }}
            />
        </div>
    )
}
export default Toggle