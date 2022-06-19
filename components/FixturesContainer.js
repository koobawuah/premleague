
const FixturesContainer = ({children}) => {

    return (
        <div className="">
            <div className="flex flex-row space-x-10 overflow-x-scroll py-4">
                {children}
            </div>
        </div>
    )
}

export default FixturesContainer;
