import "./View.scss";
import {MdViewList} from "react-icons/md";
import {MdViewModule} from "react-icons/md";

const View = (props) => {
    const {setToggleView} = props;

    return (
        <>
            <p className="view__label"><MdViewList onClick={() => setToggleView("--state--list")} /><MdViewModule onClick={() => setToggleView("--state--module")} /></p>
        </>
    );
};

export default View;
