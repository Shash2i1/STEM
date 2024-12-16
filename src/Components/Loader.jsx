import { HashLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: "white",
};

function Loader({
    isLoading,
    label,
    color = "blue"
}) {
    return isLoading ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <HashLoader
                color={color}
                loading={isLoading}
                cssOverride={{
                    override
                }}
                size={window.innerWidth < 640 ? 75 : 100} // Smaller loader on smaller screens
                aria-label={label}
                data-testid="loader"
            />
        </div>
    ) : null

}


export default Loader;