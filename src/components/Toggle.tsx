

const Toggle = ({ isToggled = true }) => {

    return (
        <div 
            className="bg-cool-gray h-6 w-10 p-1 rounded-full cursor-pointer"
            style={isToggled ? { backgroundColor: "white" } : {}}
        >
            <div 
                className="h-full aspect-square bg-dark-gray rounded-full"
                style={isToggled ? {marginLeft: "auto"} : {}}
            ></div>
        </div>
    )
}
export default Toggle