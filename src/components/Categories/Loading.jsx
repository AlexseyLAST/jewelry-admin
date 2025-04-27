import LoadingGif from "../../assets/images/loading.gif";

function Loading() {
    return (
        <div className="loader">
            <img src={LoadingGif} alt="Loading" />
        </div>
    );
}

export default Loading; 